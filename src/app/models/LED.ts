import { Color } from './color';
import { Position } from './position';

export class LED {
    public position: Position;
    public color: Color;
    public intensity: number; 
    public radius: number;


    constructor(radius) {
        this.radius = radius;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        var x = this.position.x; // x coordinate
        var y = this.position.y; // y coordinate
        var radius = this.radius; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = 2* Math.PI; // End point on circle

        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = `rgba(${this.color.rA},${this.color.gA},${this.color.bA},${this.color.aA} )`; 
        ctx.fill();     
        
    }
}