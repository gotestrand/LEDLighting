import { LED } from './LED';
import { Position } from './position';
import { Color } from './color';
import * as _ from 'lodash';
import { TouchSequence } from 'selenium-webdriver';
import { ILEDAnimation } from './ILEDAnimation';

export class LEDFixture {
    public leds: LED[];
    public radius: number;
    public position: Position;
    public indexOffset: number;
    public intensityOverride: number;

    public animators: ILEDAnimation;

    constructor(centerX, centerY, count: number, radius: number, color) {
        this.leds = [];
        this.indexOffset = 0;
        this.indexOffset = Math.random() * count;
        this.position = new Position(centerX, centerY, 0);
        this.radius = radius;
        this.intensityOverride = 0;
        count = radius / 2;

        for (let i = 0; i < count; i++) {
            let rad = 2 * Math.PI / count;
            let x = Math.cos(i * rad) * radius;
            let y = Math.sin(i * rad) * radius;

            x = i * 8;
            y = 0;

            let led = new LED(5);
            led.position = new Position(x, y, 0);
            led.color = new Color();
            led.color.HEX = color;

            this.leds.push(led);
        }
    }

    public changeR(value) {
        _.each(this.leds, led => {
            led.color.r = parseInt(value);
        })
    }
}



