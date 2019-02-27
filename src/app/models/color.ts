export class Color {
    private _r: number;
    public get r() {
        return this._r;
    }
    public set r(value) {
        this._r = value;
        this.rA = value;
    }

    private _g: number;
    public get g() {
        return this._g;
    }
    public set g(value) {
        this._g = value;
        this.gA = value;
    }

    private _b: number;
    public get b() {
        return this._b;
    }
    public set b(value) {
        this._b = value;
        this.bA = value;
    }

    private _a: number;
    public get a() {
        return this._a;
    }
    public set a(value) {
        this._a = value;
        this.aA = value;
    }

    public rA: number;
    public gA: number;
    public bA: number;
    public aA: number;
    
    constructor(r = null,g = null,b = null,a = null) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a ? a : 1;
    }

    public get HEX(): string {
        return this.rgbToHex(this.r, this.g, this.b);
    }

    public set HEX(hex: string) {
        let rgb = this.hexToRgb(hex);
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = 1;
    }

    private componentToHex(c):string {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    public rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    public hexToRgb(hex): any  {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}