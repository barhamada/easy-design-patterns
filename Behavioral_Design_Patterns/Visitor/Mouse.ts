import { ComputerPart } from "./ComputerPart";
import { ComputerPartVisitor } from "./ComputerPartVisitor";

export class Mouse implements ComputerPart {
    accept(computerPartVisitor: ComputerPartVisitor): void {
        computerPartVisitor.visit(this);
    }
    toString(): string { return 'Mouse' };
}