import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';

import * as _ from 'lodash';
import * as TWEEN from '@tweenjs/tween.js';
import { RGBAFormat } from 'three';
import { Lighting } from 'src/app/models/lighting';
import { LEDFixture } from 'src/app/models/LEDFixture';
import { LEDStrobeAnimator } from 'src/app/models/LEDStrobeAnimator';
import { LEDIntencityWaveAnimator } from 'src/app/models/LEDIntencityWaveAnimator';


@Component({
    selector: 'app-lighting',
    templateUrl: './lighting.component.html',
    styleUrls: ['./lighting.component.less']
})
export class LightingComponent implements OnInit {

    @ViewChild('canvas') public canvas: ElementRef;

    private _canvasEl: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _mouseDown: boolean = false;

    public lighting: Lighting = null;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.canvas.nativeElement.width = event.target.innerWidth;
        this.canvas.nativeElement.height = event.target.innerHeight;
    }

    constructor() {
    }

    ngOnInit() {
        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;
        this._ctx = canvasEl.getContext('2d');
        // this._ctx.globalCompositeOperation = 'screen';

        this.lighting = new Lighting(this._ctx);
        this.lighting.createRing(500, 400, 100, 300, '#AD31F6');
        this.lighting.createRing(600, 200, 100, 150, '#74F8F8');
        this.lighting.createRing(300, 350, 100, 200, '#FFFFFF');
        this.lighting.createRing(300, 600, 100, 250, '#202BD6');
        this.lighting.createRing(700, 300, 100, 75, '#202BD6');

        this.lighting.toRing();
        this.lighting.animators = [];
        this.lighting.animators.push(new LEDIntencityWaveAnimator(this.lighting.fixtures));
        this.lighting.animators.push(new LEDStrobeAnimator(this.lighting.fixtures))

        this.draw();
    }

    ngAfterViewInit() {

    }

    public toRing() {
        this.lighting.toRing();
    }

    public toLine() {
        this.lighting.toLine();
    }

    public toBar() {
        this.lighting.toBar();
    }

    public draw() {
        window.requestAnimationFrame((time) => {

            this._ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height); // clear canvas
            this._ctx.fillStyle = '#000000';
            this._ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

            TWEEN.update(time);
            this.lighting.update(time);
            this.draw();
        });
    }

    public get selectedFixture() : LEDFixture {
        return this._clickedFixture;
    }

    private _clickedFixture;
    private _clickedFixtureOffsetX;
    private _clickedFixtureOffsetY;
    private _hoveredFixture: LEDFixture;

    @HostListener('mousewheel', ['$event']) onScroll(event) {
        if (this._hoveredFixture !== undefined) {
            this._hoveredFixture.count += Math.floor(event.deltaY/100);
            this._hoveredFixture.toRing();
        }
    }

    @HostListener('mousemove', ['$event']) onMouseMove(event) {
        if (this._clickedFixture !== undefined && this._mouseDown) {
            this._clickedFixture.position.x = event.offsetX + this._clickedFixtureOffsetX;
            this._clickedFixture.position.y = event.offsetY + this._clickedFixtureOffsetY;
        }

        this._hoveredFixture = undefined;
        let closestDistance = undefined;
        _.each(this.lighting.fixtures, (fixture) => {
            let distance = Math.sqrt(Math.pow(Math.abs(fixture.position.x - event.offsetX),2) + Math.pow(Math.abs(fixture.position.y - event.offsetY),2));
            if ((closestDistance == undefined || distance < closestDistance) && distance < fixture.radius)  {
                this._hoveredFixture = fixture;                
            }
        });
        event.toElement.style.cursor = this._hoveredFixture !== undefined ? 'move' : 'auto';                         
    }
  
    @HostListener('mouseout', ['$event']) onMouseOut(event) {

    }
  
    @HostListener('mouseup') onMouseUp() {
        this._mouseDown = false;
        
    }
  
    @HostListener('mousedown', ['$event']) onMouseDown(event) {
        this._clickedFixture = undefined;
        let closestDistance = undefined;
        _.each(this.lighting.fixtures, (fixture, index) => {
            
            let distance = Math.sqrt(Math.pow(Math.abs(fixture.position.x - event.offsetX),2) + Math.pow(Math.abs(fixture.position.y - event.offsetY),2));
            if ((closestDistance == undefined || distance < closestDistance) && distance < fixture.radius)  {
                closestDistance = distance;
                this._clickedFixture = fixture;
                this._clickedFixtureOffsetX = fixture.position.x - event.offsetX;
                this._clickedFixtureOffsetY = fixture.position.y - event.offsetY;
            }
        });        
        this._mouseDown = true;
    }
}
