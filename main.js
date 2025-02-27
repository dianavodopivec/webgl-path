import THREE from "three"

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.ShaderMaterial({
  uniforms: {
    u_time: { value: 0.0 },
  },
  fragmentShader: `
  precision mediup float;
  uniform float u_time; 
  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform float u_time;
  void main() {
	gl_FragColor = vec4(1.0,0.0,1.0,1.0);
  `,
});

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const animate = (time) => {
  material.uniforms.u_time.value = time * 0.001
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
};

animate(0)
