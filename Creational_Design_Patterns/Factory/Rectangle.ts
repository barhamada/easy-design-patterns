import { Shape } from "./ShapeInterface";

export class Rectangle implements Shape{
    draw(): void {
        console.log('Inside Rectangle::draw() method.');
    }

}