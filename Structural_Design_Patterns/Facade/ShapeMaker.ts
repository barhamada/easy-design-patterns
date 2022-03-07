import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";

export class ShapeMaker {
    private circle: Shape;
    private rectangle: Shape;
    private square: Shape;

    constructor() {
        this.circle = new Circle();
        this.rectangle = new Rectangle();
        this.square = new Square();
    }

    public drawCircle(): void {
        this.circle.draw();
    }
    public drawRectangle(): void {
        this.rectangle.draw();
    }
    public drawSquare(): void {
        this.square.draw();
    }
}