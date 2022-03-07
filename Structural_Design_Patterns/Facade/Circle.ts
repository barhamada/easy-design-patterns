import { Shape } from "./Shape";

export class Circle implements Shape {
    draw(): void {
        console.log('Circle::draw()');
    }
}