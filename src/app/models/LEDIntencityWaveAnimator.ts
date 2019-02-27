import { ILEDAnimation } from './ILEDAnimation';
import { LEDFixture } from './LEDFixture';
import * as _ from 'lodash';

export class LEDIntencityWaveAnimator implements ILEDAnimation{
    
    public speed: number = 0.002;
    public turns: number = 1;
    public step: number = 1;
    public fixtureOffset: number = 90;

    private _fixtures: LEDFixture[];
    
    constructor(fixtures: LEDFixture[]) {
        this._fixtures = fixtures;
    }
    
    public animate(miliseconds: number) {
        _.each(this._fixtures, fixture => {

            // for (let index = 0; index < fixture.leds.length; index++) {
            //     console.log(index);
            //     fixture.indexOffset += this.speed * 1;
            //     let i = index + fixture.indexOffset;
    
            //     let ledRadianStep = 2 * Math.PI / fixture.leds.length;
            //     let intensity = (Math.cos(this.turns * i * ledRadianStep) + 1) / 2;
                
            //     fixture.leds[i].color.aA = intensity;
            //     fixture.leds[i].color.aA += fixture.intensityOverride;
                
            //     if (fixture.indexOffset > fixture.leds.length) fixture.indexOffset = 0;
    
            //     if (this.step < 1) {
            //         fixture.leds[i].color.aA = fixture.leds[i].color.aA > this.step ? 1 : 0;
            //     } 
            // }
            _.each(fixture.leds, (led,index) => {

                fixture.indexOffset += this.speed * 1;
                index = index + fixture.indexOffset;
    
                let ledRadianStep = 2 * Math.PI / fixture.leds.length;
                let intensity = (Math.cos(this.turns * index * ledRadianStep) + 1) / 2;
                
                led.color.aA = intensity;
                led.color.aA += fixture.intensityOverride;
                
                if (fixture.indexOffset > fixture.leds.length) fixture.indexOffset = 0;
    
                if (this.step < 1) {
                    led.color.aA = led.color.aA > this.step ? 1 : 0;
                }
    
            }); 
        });             
    }

    public get disabled(): boolean {
        return this.speed == 0;
    }

}