import { AbstractFactory } from "./AbstractFactory";
import { Rectangle } from "./Rectangle";
import { Shape } from "./ShapeInterface";
import { Square } from "./Square";

export class ShapeFactory extends AbstractFactory {
    public getShape(shapeType: string): Shape {
        if (shapeType.toLowerCase() === 'rectangle') {
            return new Rectangle();
        } else if (shapeType.toLowerCase() === 'square') {
            return new Square();
        }
        return null;
    }
}