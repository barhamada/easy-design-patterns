import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor() {
        super();
        this.type = 'Rectangle';
    }

    draw(): void {
        console.log('Inside Rectangle::draw() method.');
    }
}