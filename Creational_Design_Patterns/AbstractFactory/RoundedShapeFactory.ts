import { AbstractFactory } from "./AbstractFactory";
import { RoundedRectangle } from "./RoundedRectangle";
import { RoundedSquare } from "./RoundedSquare";
import { Shape } from "./ShapeInterface";

export class RoundedShapeFactory extends AbstractFactory {
    public getShape(shapeType: string): Shape {
        if (shapeType.toLowerCase() === 'rectangle') {
            return new RoundedRectangle();
        } else if (shapeType.toLowerCase() === 'square') {
            return new RoundedSquare();
        }
        return null;
    }
}