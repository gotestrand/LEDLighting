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
    public color: string;
    public state: string;

    private _count: number;
    public get count() {
        return this._count;
    }
    public set count(value) {
        this._count = value;
        switch (this.state) {
            case this.RING: 
                this.toRing();
                break;
        }
    }

    constructor(centerX, centerY, count: number, radius: number, color:string) {
        this.leds = [];
        this.indexOffset = 0;
        this.indexOffset = Math.random() * count;
        this.position = new Position(centerX, centerY, 0);
        this.radius = radius;
        this.intensityOverride = 0;
        this.count = radius / 2;
        this.color = color;
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
    }

    toRing() {
        this.leds = [];
        for (let i = 0; i < this.count; i++) {
            let rad = 2 * Math.PI / this.count;
            let x = Math.cos(i * rad) * this.radius;
            let y = Math.sin(i * rad) * this.radius;

            let led = new LED(5);
            led.position = new Position(x, y, 0);            

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

            this.leds.push(led);
        }
    }
}



