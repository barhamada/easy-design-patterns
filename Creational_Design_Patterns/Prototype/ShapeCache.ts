import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";

export class ShapeCache {

    private static shapeMap = {};

    public static getShape(shapeId: string): Shape {
        const cachedShape: Shape = ShapeCache.shapeMap[shapeId];
        return cachedShape.clone() as Shape;
    }

    // for each shape run database query and create shape
    // shapeMap.put(shapeKey, shape);
    // for example, we are adding three shapes

    public static loadCache(): void {
        const circle: Circle = new Circle();
        circle.setId('1');
        ShapeCache.shapeMap[circle.getId()] = circle;

        const square: Square = new Square();
        square.setId('2');
        ShapeCache.shapeMap[square.getId()] = square;

        const rectangle: Rectangle = new Rectangle();
        rectangle.setId('3');
        ShapeCache.shapeMap[rectangle.getId()] = rectangle;
    }
}
