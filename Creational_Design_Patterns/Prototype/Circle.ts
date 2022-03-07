import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor() {
        super();
        this.type = 'Circle';
    }

    draw(): void {
        console.log('Inside Circle::draw() method.');
    }
}