import { Shape } from "./Shape";

export class Square implements Shape {
    draw(): void {
        console.log('Square::draw()');
    }
}