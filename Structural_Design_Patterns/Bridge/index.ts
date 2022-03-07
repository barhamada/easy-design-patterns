import { Circle } from "./Circle";
import { GreenCircle } from "./GreenCircle";
import { RedCircle } from "./RedCircle";
import { Shape } from "./Shape";

const redCircle: Shape = new Circle(100, 100, 10, new RedCircle());
const greenCircle: Shape = new Circle(100, 100, 10, new GreenCircle());

redCircle.draw();
greenCircle.draw();