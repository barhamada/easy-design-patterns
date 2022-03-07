import { DrawApiInterface } from "./DrawApiInterface";

export class GreenCircle implements DrawApiInterface {
    drawCircle(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle[ color: green, radius: ${radius}, x: ${x}, y: ${y} ]`);
    }
}