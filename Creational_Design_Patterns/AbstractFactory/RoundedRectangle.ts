import { Shape } from "./ShapeInterface";

export class RoundedRectangle implements Shape {
    draw(): void {
       console.log('Inside RoundedRectangle::draw() method.');
    }
 }