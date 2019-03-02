import * as THREE from 'three';
import * as _ from 'lodash';
import * as TWEEN from '@tweenjs/tween.js';
import { LEDFixture} from './LEDFixture';
import { Position } from './position';
import { ILEDAnimation } from './ILEDAnimation';

export class Lighting {
    
    public ctx: CanvasRenderingContext2D;
    public fixtures: LEDFixture[];
    public animators: ILEDAnimation[];

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;        
        this.fixtures = [];
        this.animators = [];
    }

    public update(miliseconds: number) {
        this.animate(miliseconds);
        this.draw(miliseconds);
    }

    public createRing(centerX,centerY,count, radius, color) {
        this.fixtures.push(new LEDFixture(centerX,centerY,count, radius, color));
    }

    public draw(miliseconds: number) {

        _.each(this.fixtures, (fixture, ringIndex) => {    
            this.ctx.translate(fixture.position.x, fixture.position.y);

            _.each(fixture.leds, (led,index) => {
                led.draw(this.ctx);
            }); 

            this.ctx.resetTransform();
        })
    }

    public animate(miliseconds: number) {
        _.each(this.animators, (animator) => {
            if (!animator.disabled) {
                animator.animate(miliseconds);
            }
        })
    }

    public randomPosition() {
        _.each(this.fixtures, (fixture) => {

            
            let width = window.innerWidth;
            let height = window.innerHeight;
            let padding = 0.3;
            let position = new Position(Math.random() * (width*(1-2*padding)) + padding*width,Math.random() * (height*(1-2*padding)) + padding*height,0);
            let tweenTo = {
                position: position,
                count: Math.random() * 120 + 40
            }

            let tween = new TWEEN.Tween(fixture.position)            
                .to(position,1000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(() => {
                
                })
                .start();
        });
    }

    public toRing() {
        this.randomPosition();
        _.each(this.fixtures, (fixture, fixtureIndex) => {
            let rad = 2 * Math.PI / fixture.leds.length;

            setTimeout(() => {
                _.each(fixture.leds, (led, i) => {                
                    
                    let x = Math.cos(i * rad + Math.PI/2) * fixture.radius;
                    let y = Math.sin(i * rad + Math.PI/2) * fixture.radius;
                    let position = new Position(x,y,0);    
                    
                    let tween = new TWEEN.Tween(led.position)
                        .to(position,1000)
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .onUpdate(() => {
                        
                        })
                        .start();    
                            
                });
            }, fixtureIndex*10);   
        });
    }

    public toLine() {
        _.each(this.fixtures, (fixture, fixtureIndex) => {
            
            setTimeout(() => {

                _.each(fixture.leds, (led, i) => {                
                        
                    let position = new Position(i*5 -300,0,0);    
                    
                    let tween = new TWEEN.Tween(led.position)
                    .to(position,1000)
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .onUpdate(() => {
                    
                    })
                    .start();    
                            
                });
            }, fixtureIndex*10);   
        });
    }
    
    public toBar() {
        
    }
}






