import { Shape } from "./Shape";

export class Square extends Shape {

    constructor() {
        super();
        this.type = 'Square';
    }

    draw(): void {
        console.log('Inside Square::draw() method.');
    }
}