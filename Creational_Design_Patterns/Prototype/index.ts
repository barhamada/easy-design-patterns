import { Shape } from "./Shape";
import { ShapeCache } from "./ShapeCache";

ShapeCache.loadCache();

const clonedShape = ShapeCache.getShape('1');
console.log('Shape : ', clonedShape.getType());

const clonedShape2: Shape = ShapeCache.getShape('2');
console.log('Shape : ', clonedShape2.getType());

const clonedShape3: Shape = ShapeCache.getShape('3');
console.log('Shape : ', clonedShape3.getType());	