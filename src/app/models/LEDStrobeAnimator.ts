import { ILEDAnimation } from './ILEDAnimation';
import { LEDFixture } from './LEDFixture';
import * as _ from 'lodash';

export class LEDStrobeAnimator implements ILEDAnimation{
    
    public delay: number;
    public flash: number;
    public hold: number;
    public attack: number;
    public fixtureOffset: number;

    private _fixtures: LEDFixture[];
    
    constructor(fixtures: LEDFixture[]) {
        this._fixtures = fixtures;

        this.delay = 0;
        this.flash = 500;
        this.attack = 400;
        this.hold = 400;
        this.fixtureOffset = 300;
    }
    
    public animate(miliseconds: number) {
        _.each(this._fixtures, (fixture, index) => {
            _.each(fixture.leds, (led) => {
                
                let timespan = (miliseconds + index * this.fixtureOffset) % this.delay;
                // timespan += ;


                let holdStep = 1/this.hold;
                let attackStep = 1/this.attack;

                if (timespan < this.attack) {
                    led.color.aA = led.color.aA * timespan * attackStep;
                } else if (timespan < this.flash + this.attack) {
                    led.color.aA = led.color.aA;
                } else if (timespan < this.flash + this.attack + this.hold) {
                    led.color.aA = led.color.aA * (1 - (timespan-(this.flash+this.attack)) * holdStep)
                } else {
                    led.color.aA = 0;
                }

            }); 
        });     
        
    }

    public get disabled(): boolean {
        return this.delay < 0.1;
    }
}
