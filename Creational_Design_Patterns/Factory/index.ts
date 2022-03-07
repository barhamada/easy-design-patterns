import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { ShapeFactory } from "./ShapeFactory";
import { Square } from "./Square";

const shapeFactory = new ShapeFactory();

const circle = shapeFactory.getShape('Circle');
const rectangle = shapeFactory.getShape('Rectangle');
const square = shapeFactory.getShape('Square');

circle.draw();
console.log(circle instanceof Circle);
console.log('------------------------------');

rectangle.draw();
console.log(rectangle instanceof Rectangle);
console.log('------------------------------');

square.draw();
console.log(square instanceof Square);
console.log('------------------------------');