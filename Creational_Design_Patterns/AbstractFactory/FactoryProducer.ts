import { AbstractFactory } from "./AbstractFactory";
import { RoundedShapeFactory } from "./RoundedShapeFactory";
import { ShapeFactory } from "./ShapeFactory";

export class FactoryProducer {
    static getFactory(rounded: boolean): AbstractFactory {
        if (rounded) {
            return new RoundedShapeFactory();
        } else {
            return new ShapeFactory();
        }
    }
}