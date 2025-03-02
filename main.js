import * as THREE from 'three';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const fragmentShader = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform float u_time;

    vec4 purple() {
     return vec4(0.1, 0.0, 1.0, 1.0);
    } 
    
    void main() {
      gl_FragColor = purple();
    }
`

const shaderMaterial = new THREE.ShaderMaterial({
    fragmentShader,
    uniforms: {
        u_time: { value: 0.0 }
    }
})

const geometry = new THREE.PlaneGeometry(2, 2)
const mesh = new THREE.Mesh(geometry, shaderMaterial)
scene.add(mesh)

camera.position.z = 1

const animate = () => {
    requestAnimationFrame(animate)
    shaderMaterial.uniforms.u_time.value = performance.now() / 1000.0
    renderer.render(scene, camera)
}

animate()
