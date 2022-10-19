import styles from './style.css';
import * as THREE from 'three';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { GUI } from 'dat.gui';
// import {frameCorners} from './node_modules/three/examples/jsm/utils/CameraUtils.js';

//GUI

// const gui = new GUI();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth/ window.innerHeight, 0.1,1000);
// const helper = new THREE.CameraHelper( camera );
// scene.add( helper );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setClearColor( 0x000000, 0 );


const loader = new GLTFLoader();


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// const size = 10;
// const divisions = 10;
// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );
let sonic, fox;

  loader.load('assets/sonic/scene.gltf', function (gltf){
    sonic = gltf;
   scene.add(gltf.scene);
   gltf.scene.position.set(1,0,0);
  })
loader.load('assets/fox/scene.gltf', function (gltf2){
  fox = gltf2;
scene.add(gltf2.scene);
gltf2.scene.position.set(-1,0,0)
})




// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
const light = new THREE.AmbientLight(0x808080, 2);
scene.add(light);




const controls = new OrbitControls( camera, renderer.domElement );

camera.position.set(0,1,3);




function animate() {
	requestAnimationFrame( animate );
  sonic.scene.rotation.y+= 0.01;
  fox.scene.rotation.y-= 0.01;

  controls.update();
	renderer.render( scene, camera );
}
animate();