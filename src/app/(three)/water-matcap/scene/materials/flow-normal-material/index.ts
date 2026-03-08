import { GLSL3, RawShaderMaterial } from "three"

import fragmentShader from "./shader/index.frag"
import vertexShader from "./shader/index.vert"

export function createFlowNormalMaterial() {
  const material = new RawShaderMaterial({
    uniforms: {
      uHeightmap: { value: null }
    },
    vertexShader,
    fragmentShader,
    glslVersion: GLSL3
  })

  return material
}
