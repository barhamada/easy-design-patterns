import { Circle } from "./Circle";
import { Shape } from "./Shape";

export class ShapeFactory {

    private static circleMap = {};
 
    static getCircle(color: string): Shape {
       let circle: Circle = ShapeFactory.circleMap[color];
 
       if(circle == null) {
          circle = new Circle(color);
          ShapeFactory.circleMap[color] = circle;
          console.log(`Creating circle of color : ${color}`);
       }
       return circle;
    }
 }