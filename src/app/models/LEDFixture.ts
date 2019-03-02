import { LED } from './LED';
import { Position } from './position';
import { Color } from './color';
import * as _ from 'lodash';
import { TouchSequence } from 'selenium-webdriver';
import { ILEDAnimation } from './ILEDAnimation';

export class LEDFixture {

    private readonly RING: string = 'RING';
    private readonly BAR: string = 'BAR';

    public leds: LED[];
    public radius: number;
    public position: Position;
    public indexOffset: number;
    public intensityOverride: number;
    public animators: ILEDAnimation;    
    public state: string;

    public color: Color;

    private _count: number;
    public get count() {
        return this._count;
    }
    public set count(value) {
        let count = Math.floor(value);
        this._count = count;
        switch (this.state) {
            case this.RING: 
                this.radius = count * 2;
                this.toRing();
                break;
        }
        // console.log(value);
    }

    constructor(centerX, centerY, count: number, radius: number, color:string) {
        this.leds = [];
        this.indexOffset = 0;
        this.indexOffset = Math.random() * count;
        this.position = new Position(centerX, centerY, 0);
        this.radius = radius;
        this.intensityOverride = 0;
        this.count = radius / 2;
        let c = new Color();
        c.HEX = color
        this.color = c;
        this.state = this.RING;

        for (let i = 0; i < this.count; i++) {
            let rad = 2 * Math.PI / this.count;
            let x = Math.cos(i * rad) * radius;
            let y = Math.sin(i * rad) * radius;

            let led = new LED(5);
            led.position = new Position(x, y, 0);
            led.color = new Color();
            led.color.HEX = color;

            this.leds.push(led);
        }

        this.color.colorChange((color: Color) => {
            _.each(this.leds, (led) => {
                led.color.r = color.r;
                led.color.g = color.g;
                led.color.b = color.b;
            })
        });

    }

    toRing() {
        this.leds = [];        
        for (let i = 0; i < this.count; i++) {
            let rad = 2 * Math.PI / this.count;
            let x = Math.cos(i * rad) * this.radius;
            let y = Math.sin(i * rad) * this.radius;

            let led = new LED(5);
            led.position = new Position(x, y, 0);            
            led.color = new Color();
            led.color.HEX = this.color.HEX;

            this.leds.push(led);
        }
    }

    toBar() {
        let count = 150
        for (let i = 0; i < count; i++) {

            let rad = 2 * Math.PI / this.count;
            let x = this.position.x;
            let y = (window.innerHeight / count) * i;

            let led = new LED(5);
            led.position = new Position(x, y, 0);   
            led.color = new Color();
            led.color.HEX = this.color.HEX;   

            this.leds.push(led);
        }
    }
}



