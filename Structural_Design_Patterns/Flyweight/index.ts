import { Circle } from "./Circle";
import { ShapeFactory } from "./ShapeFactory";

const colors: string[] = ['Red', 'Green', 'Blue', 'White', 'Black'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const getRandomX = () => Math.floor(Math.random() * 100);

const getRandomY = () => Math.floor(Math.random() * 100);

for (let i = 0; i < 20; ++i) {
    const circle: Circle = ShapeFactory.getCircle(getRandomColor()) as Circle;
    circle.setX(getRandomX());
    circle.setY(getRandomY());
    circle.setRadius(100);
    circle.draw();
}