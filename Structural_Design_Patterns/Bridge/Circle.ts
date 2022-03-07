import { DrawApiInterface } from "./DrawApiInterface";
import { Shape } from "./Shape";

export class Circle extends Shape {
    private x: number;
    private y: number;
    private radius: number;

    constructor(x: number, y: number, radius: number, drawAPI: DrawApiInterface) {
        super(drawAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(): void {
        this.drawAPI.drawCircle(this.radius, this.x, this.y);
    }
}