import { Shape } from "./Shape";
import { ShapeDecorator } from "./ShapeDecorator";

export class RedShapeDecorator extends ShapeDecorator {

    constructor(decoratedShape: Shape) {
        super(decoratedShape);
    }

    draw(): void {
        this.decoratedShape.draw();
        this.setRedBorder(this.decoratedShape);
    }

    private setRedBorder(decoratedShape: Shape): void {
        console.log('Border Color: Red');
    }
}