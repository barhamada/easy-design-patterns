import { AbstractFactory } from "./AbstractFactory";
import { FactoryProducer } from "./FactoryProducer";
import { Shape } from "./ShapeInterface";

//get shape factory
const shapeFactory: AbstractFactory = FactoryProducer.getFactory(false);
//get an object of Shape Rectangle
const shape1: Shape = shapeFactory.getShape('RECTANGLE');
//call draw method of Shape Rectangle
shape1.draw();
//get an object of Shape Square 
const shape2: Shape = shapeFactory.getShape('SQUARE');
//call draw method of Shape Square
shape2.draw();
//get shape factory
const shapeFactory1: AbstractFactory = FactoryProducer.getFactory(true);
//get an object of Shape Rectangle
const shape3: Shape = shapeFactory1.getShape('RECTANGLE');
//call draw method of Shape Rectangle
shape3.draw();
//get an object of Shape Square 
const shape4: Shape = shapeFactory1.getShape('SQUARE');
//call draw method of Shape Square
shape4.draw();