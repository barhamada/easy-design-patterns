import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./ShapeInterface";
import { Square } from "./Square";

export class ShapeFactory {
	
    //use getShape method to get object of type shape 
    getShape(shapeType: string): Shape{
       if(shapeType.toLowerCase() === 'circle') return new Circle();
       if(shapeType.toLowerCase() === 'rectangle') return new Rectangle();
       if(shapeType.toLowerCase() === 'square') return new Square();
       return null;
    }
 }