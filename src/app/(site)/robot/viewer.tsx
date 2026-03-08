"use client"

import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

type ViewerProps = {
  src: string
}

export function Viewer({ src }: ViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const frameRef = useRef<number | null>(null)
  // Track the currently loaded model so we can remove/dispose it when src changes
  const currentModelRef = useRef<THREE.Object3D | null>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight || 1,
      0.1,
      1000
    )
    camera.position.set(2.5, 1.8, 3.2)
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0x222244, 0.8)
    scene.add(hemi)
    const dir = new THREE.DirectionalLight(0xffffff, 1.0)
    dir.position.set(3, 5, 2)
    scene.add(dir)

    // Ground (subtle)
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(10, 64),
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.9,
        metalness: 0.0
      })
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.01
    scene.add(ground)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enablePan = true
    controls.minDistance = 0.5
    controls.maxDistance = 10
    controlsRef.current = controls

    // Handle resize
    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return
      const w = container.clientWidth
      const h = container.clientHeight
      cameraRef.current.aspect = w / h
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    handleResize()

    // Helper to dispose meshes/materials/geometries/textures on an object
    const disposeObject = (obj: THREE.Object3D) => {
      // Extracted helper to avoid duplication between array and single materials
      const disposeMaterialTextures = (material: any) => {
        const textureProps = [
          "map",
          "normalMap",
          "roughnessMap",
          "metalnessMap",
          "aoMap",
          "emissiveMap",
          "alphaMap",
          "displacementMap",
          "lightMap",
          "bumpMap"
        ]
        textureProps.forEach((prop) => {
          const tex = material?.[prop]
          if (tex && typeof tex.dispose === "function") {
            tex.dispose()
          }
        })
        if (material && typeof material.dispose === "function") {
          material.dispose()
        }
      }

      obj.traverse((child) => {
        const mesh = child as THREE.Mesh
        if (mesh.geometry) {
          mesh.geometry.dispose()
        }
        const material = mesh.material as any
        if (material) {
          if (Array.isArray(material)) {
            material.forEach(disposeMaterialTextures)
          } else {
            disposeMaterialTextures(material)
          }
        }
      })
    }

    // Load model (ensure previous one is removed/disposed first)
    const loader = new GLTFLoader()
    setLoading(true)
    setError(null)
    loader.load(
      src,
      (gltf) => {
        // Remove previous model if present
        if (currentModelRef.current) {
          if (scene.children.includes(currentModelRef.current)) {
            scene.remove(currentModelRef.current)
          }
          disposeObject(currentModelRef.current)
          currentModelRef.current = null
        }

        const model = gltf.scene
        // Center and scale to fit
        const box = new THREE.Box3().setFromObject(model)
        const size = new THREE.Vector3()
        box.getSize(size)
        const center = new THREE.Vector3()
        box.getCenter(center)
        model.position.sub(center) // center at origin
        const maxDim = Math.max(size.x, size.y, size.z) || 1
        const scale = 1.6 / maxDim
        model.scale.setScalar(scale)
        scene.add(model)
        currentModelRef.current = model
        setLoading(false)
      },
      undefined,
      (err) => {
        // eslint-disable-next-line no-console
        console.error("GLB load error:", err)
        setError("Failed to load 3D model")
        setLoading(false)
      }
    )

    // Animate
    const animate = () => {
      controls.update()
      renderer.render(scene, camera)
      frameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      resizeObserver.disconnect()
      controls.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      // Dispose current model first (if any)
      if (currentModelRef.current) {
        // Remove from scene and dispose its resources
        scene.remove(currentModelRef.current)
        disposeObject(currentModelRef.current)
        currentModelRef.current = null
      }

      // Dispose scene resources (lights, ground materials/geometries, etc.)
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) {
          ;(obj as THREE.Mesh).geometry.dispose()
        }
        if ((obj as THREE.Mesh).material) {
          const mat = (obj as THREE.Mesh).material
          if (Array.isArray(mat)) {
            mat.forEach((m) => m.dispose && m.dispose())
          } else if ((mat as any).dispose) {
            ;(mat as any).dispose()
          }
        }
      })
    }
  }, [src])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          Loading 3D model...
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500">
          {error}
        </div>
      )}
    </div>
  )
}
