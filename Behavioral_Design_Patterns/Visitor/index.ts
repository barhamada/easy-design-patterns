import { Computer } from "./Computer";
import { ComputerPart } from "./ComputerPart";
import { ComputerPartDisplayVisitor } from "./ComputerPartDisplayVisitor";

const computer: ComputerPart = new Computer();
computer.accept(new ComputerPartDisplayVisitor());