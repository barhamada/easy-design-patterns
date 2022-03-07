import { Shape } from "./ShapeInterface";

export class Circle implements Shape{
    draw(): void {
        console.log('Inside Circle::draw() method.');
    }

}