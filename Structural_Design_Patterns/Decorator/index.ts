import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { RedShapeDecorator } from "./RedShapeDecorator";
import { Shape } from "./Shape";

const circle: Shape = new Circle();

const redCircle: Shape = new RedShapeDecorator(new Circle());

const redRectangle: Shape = new RedShapeDecorator(new Rectangle());
console.log('Circle with normal border')
circle.draw();

console.log('Circle of red border')
redCircle.draw();

console.log('Rectangle of red border');
redRectangle.draw();