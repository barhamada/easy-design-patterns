import { Shape } from "./ShapeInterface";

export abstract class AbstractFactory {
    abstract getShape(shapeType: string): Shape;
}