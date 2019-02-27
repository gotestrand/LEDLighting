import * as THREE from 'three';

export class Lighting {
    // we need the first child, since it's a multimaterial
    radius = 40;
    tube = 28.2;
    radialSegments = 600;
    tubularSegments = 12;
    p = 5;
    q = 4;
    heightScale = 4;
    asParticles = true;
    rotate = true;

    knot:THREE.Points | THREE.Object3D = null;

    constructor(public scene) {
        this.redraw();
    }

    public redraw(): void {
        // remove the old plane
        if (this.knot) this.scene.remove(this.knot);
        // create a new one
        // var geom = new THREE.TorusKnotGeometry(this.radius, this.tube, Math.round(this.radialSegments), Math.round(this.tubularSegments), Math.round(this.p), Math.round(this.q));

        var geom = new THREE.RingGeometry(this.radius, this.radius, this.radialSegments);

        if (this.asParticles) {
            this.knot = this.createParticleSystem(geom);
        } else {
            this.knot = this.createMesh(geom);
        }

        // add it to the scene.
        this.scene.add(this.knot);
    };

    generateSprite(): THREE.Texture {

        var canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;

        var context = canvas.getContext('2d');
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
        gradient.addColorStop(0.4, 'rgba(255,0,64,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,1)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;

    }

    createParticleSystem(geom) : THREE.Points{
        var material = new THREE.PointsMaterial({
            color: 0xffff,
            size: 3,
            transparent: true,
            blending: THREE.AdditiveBlending,
            map: this.generateSprite(),
            depthWrite: false
        });

        var system = new THREE.Points(geom, material);
                
        return system;
    }

    createMesh(geom): THREE.Object3D {

        // assign two materials
        var meshMaterial = new THREE.MeshNormalMaterial({});
        meshMaterial.side = THREE.DoubleSide;

        // create a multimaterial
        var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

        return mesh;
    }
}