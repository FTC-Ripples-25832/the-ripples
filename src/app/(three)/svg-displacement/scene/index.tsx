"use client"

import {
  createPortal,
  ThreeEvent,
  useFrame,
  useThree
} from "@react-three/fiber"
import { useCallback, useEffect, useMemo } from "react"
import * as THREE from "three"

import { useMaterials } from "./use-materials"
import { useTargets } from "./use-targets"
import { PerspectiveCamera } from "@react-three/drei"
export function Scene() {
  const vRefs = useMemo(
    () => ({
      uv: new THREE.Vector2(),
      smoothUv: new THREE.Vector2(),
      prevSmoothUv: new THREE.Vector2(),
      velocity: new THREE.Vector2(),
      shouldReset: true
    }),
    []
  )

  const targets = useTargets()
  const { flowFbo } = targets
  const materials = useMaterials(targets)
  const { flowMaterial, flowNormalMaterial } = materials

  // We'll raycast against the plane to compute precise UVs under the cursor,
  // which avoids offsets from CSS layout, DPR, and container scaling.
  const planeRef = useMemo(() => new THREE.Object3D(), [])
  const scenePlaneRef = useMemo(() => ({ current: null as THREE.Mesh | null }), [])
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const ndc = useMemo(() => new THREE.Vector2(), [])
  const getState = useThree(() => ({} as any)) // placeholder to access size/camera if needed
  const uvFromIntersection = useCallback((i: THREE.Intersection) => {
    // Compute UVs robustly: prefer direct uv, else compute from face+uvs if available
    if ((i as any).uv) return (i as any).uv as THREE.Vector2
    if (i.face && i.object) {
      const geom = (i.object as any).geometry as THREE.BufferGeometry | undefined
      if (geom) {
        const uvAttr = geom.getAttribute("uv") as THREE.BufferAttribute | undefined
        const indexAttr = geom.getIndex()
        if (uvAttr && indexAttr) {
          const a = indexAttr.getX(i.face.a)
          const b = indexAttr.getX(i.face.b)
          const c = indexAttr.getX(i.face.c)
          const uva = new THREE.Vector2().fromBufferAttribute(uvAttr, a)
          const uvb = new THREE.Vector2().fromBufferAttribute(uvAttr, b)
          const uvc = new THREE.Vector2().fromBufferAttribute(uvAttr, c)
          const uv = new THREE.Vector2()
          const bary = i.uv ? (i.uv as THREE.Vector2) : new THREE.Vector2(0.5, 0.5)
          // Fallback linear mix (approx) if bary not present
          uv.set(
            (uva.x + uvb.x + uvc.x) / 3,
            (uva.y + uvb.y + uvc.y) / 3
          )
          return uv
        }
      }
    }
    return null
  }, [])

  const handlePointerMove = useCallback((e: ThreeEvent<PointerEvent>) => {
    // Compute NDC using the event target canvas rect to be independent of CSS scaling
    const target = e.target as HTMLElement | null
    const rect = target?.getBoundingClientRect()
    const w = rect?.width ?? window.innerWidth
    const h = rect?.height ?? window.innerHeight
    const cx = (e.nativeEvent as PointerEvent).clientX - (rect?.left ?? 0)
    const cy = (e.nativeEvent as PointerEvent).clientY - (rect?.top ?? 0)

    ndc.set((cx / w) * 2 - 1, -(cy / h) * 2 + 1)

    // Use camera provided by R3F event
    const cam = (e as any).camera as THREE.Camera | undefined
    if (cam) {
      raycaster.setFromCamera(ndc, cam)
      // Prefer the live mesh ref; fallback to planeRef clone
      const targetMesh = scenePlaneRef.current as unknown as THREE.Object3D | null
      const obj = (targetMesh || (planeRef as unknown as THREE.Mesh)) as THREE.Object3D
      if ((obj as any).geometry) {
        const intersects = raycaster.intersectObject(obj, false)
        if (intersects.length) {
          const uv = uvFromIntersection(intersects[0])
          if (uv) {
            vRefs.uv.copy(uv)
            return
          }
        }
      }
    }

    // Fallback to e.uv if raycast fails for any reason
    if (e.uv) {
      vRefs.uv.copy(e.uv)
    }
  }, [ndc, raycaster, uvFromIntersection, planeRef, vRefs])

  const updateFilter = useCallback((canvas: HTMLCanvasElement) => {
    const feImage = document.getElementById(
      "displacementMapImage"
    ) as any as SVGFEImageElement | null
    if (feImage) {
      feImage.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "href",
        canvas.toDataURL("image/png", 0.1)
      )
    }
  }, [])

  // smooth mouse
  useFrame((_, delta) => {
    if (vRefs.shouldReset) {
      vRefs.smoothUv.copy(vRefs.uv)
      vRefs.prevSmoothUv.copy(vRefs.uv)
      vRefs.shouldReset = false
    }

    vRefs.prevSmoothUv.copy(vRefs.smoothUv)
    vRefs.smoothUv.lerp(vRefs.uv, delta * 10)
    vRefs.velocity.subVectors(vRefs.smoothUv, vRefs.prevSmoothUv)
  })

  // Update flow simulation
  useFrame(({ gl, camera, scene, clock }, _delta, frame) => {
    // Update uniformsscene
    flowMaterial.uniforms.uMouse.value.set(vRefs.smoothUv.x, vRefs.smoothUv.y)
    flowMaterial.uniforms.uFlowFeedBackTexture.value = flowFbo.read.texture
    flowMaterial.uniforms.uMouseVelocity.value = vRefs.velocity.length()
    flowMaterial.uniforms.uFrame.value = frame
    flowMaterial.uniforms.uTime.value = clock.getElapsedTime()

    // Render flow sim
    gl.setRenderTarget(flowFbo.write)
    gl.render(flowScene, camera)
    gl.setRenderTarget(null)

    flowFbo.swap()

    gl.render(scene, camera)

    // Ensure we read from the correct WebGL canvas used by R3F (renderer.domElement)
    const webglCanvas = gl.domElement as HTMLCanvasElement
    if (webglCanvas) {
      updateFilter(webglCanvas)
    } else {
      // Fallback to querying inside container by id if domElement unavailable (shouldn't happen)
      const canvasContainer = document.getElementById(
        "displacementCanvasContainer"
      ) as HTMLDivElement | null
      if (canvasContainer) {
        const canvas = canvasContainer.querySelector(
          "canvas"
        ) as HTMLCanvasElement | null
        if (canvas) {
          updateFilter(canvas)
        }
      }
    }
  }, 1)

  const flowScene = useMemo(() => new THREE.Scene(), [])

  const sceneCamera = useThree((state) => state.camera)

  useEffect(() => {
    sceneCamera.lookAt(0, 0, 0.5)
  }, [sceneCamera])

  return (
    <>
      {createPortal(
        <mesh>
          <planeGeometry args={[PLANE_SIZE, PLANE_SIZE]} />
          <primitive object={flowMaterial} />
        </mesh>,
        flowScene
      )}
      <mesh
        ref={(m) => {
          scenePlaneRef.current = m as any
          if (m) {
            // Also mirror core raycast-able fields into planeRef for fallback
            // @ts-ignore
            planeRef.uuid = (m as any).uuid
            ;(planeRef as any).geometry = (m as any).geometry
            ;(planeRef as any).matrixWorld = (m as any).matrixWorld
            ;(planeRef as any).isMesh = true
            ;(planeRef as any).material = (m as any).material
            ;(planeRef as any).raycast = (m as any).raycast
          }
        }}
        rotation={[Math.PI / -2, 0, 0]}
        position={[0, 0, 0]}
        onPointerMove={handlePointerMove}
        onPointerOver={() => (vRefs.shouldReset = true)}
      >
        <planeGeometry args={[PLANE_SIZE, PLANE_SIZE]} />
        <primitive object={flowNormalMaterial} />
      </mesh>
      <PerspectiveCamera makeDefault position={[0, 1, 2]} />
    </>
  )
}

const PLANE_SIZE = 4
