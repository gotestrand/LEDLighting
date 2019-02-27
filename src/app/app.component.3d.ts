// import * as THREE from 'three';
// import * as dat from 'dat.gui';
// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { Lighting } from './lighting';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.less']
// })
// export class AppComponent {
//   @ViewChild('rendererContainer') rendererContainer: ElementRef;

//   renderer = new THREE.WebGLRenderer();
//     scene = null;
//     camera = null;
//     mesh = null;

//     lighting: Lighting;
//     gui: dat.GUI;

//     constructor() {

//       // https://threejs.org/examples/#webgl_points_billboards
     
//       //https://github.com/jackrugile/3d-particle-explorations


//       // var stats = initStats();

//         // create a scene, that will hold all our elements such as objects, cameras and lights.
//         this.scene = new THREE.Scene();

//         // create a camera, which defines where we're looking at.
//         this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

//         // create a render and set the size
//         this.renderer = new THREE.WebGLRenderer();
//         this.renderer.setClearColor(new THREE.Color(0,0,0));
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//         this.renderer.shadowMapEnabled = true;


//         // position and point the camera to the center of the scene
//         this.camera.position.x = 0;
//         this.camera.position.y = 0;
//         this.camera.position.z = 100;
//         this.camera.lookAt(new THREE.Vector3(0, 0, 10));

//         this.lighting = new Lighting(this.scene);

//         // call the render function


//         this.gui = new dat.GUI();
//         // var gui = new dat.GUI();
//         this.gui.add(this.lighting, 'radius', 0, 40).onChange(() => this.lighting.redraw());
//         // this.gui.add(this.lighting, 'tube', 0, 40).onChange(() => this.lighting.redraw());
//         this.gui.add(this.lighting, 'radialSegments', 0, 400).step(1).onChange(() => this.lighting.redraw());
//         // this.gui.add(this.lighting, 'tubularSegments', 1, 20).step(1).onChange(() => this.lighting.redraw());
//         // this.gui.add(this.lighting, 'p', 1, 10).step(1).onChange(() => this.lighting.redraw());
//         // this.gui.add(this.lighting, 'q', 1, 15).step(1).onChange(() => this.lighting.redraw());
//         // this.gui.add(this.lighting, 'heightScale', 0, 5).onChange(() => this.lighting.redraw());
//         this.gui.add(this.lighting, 'asParticles').onChange(() => this.lighting.redraw());
//         this.gui.add(this.lighting, 'rotate').onChange(() => this.lighting.redraw());
      

//     }

//     ngAfterViewInit() {
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//         this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
//         this.animate();
//     }

//     animate() {
//         window.requestAnimationFrame(() => this.animate());
     

//         // let geometry: THREE.Geometry = (<THREE.Points>this.lighting.knot).geometry as THREE.Geometry;


//         this.renderer.render(this.scene, this.camera);
//     }
// }
