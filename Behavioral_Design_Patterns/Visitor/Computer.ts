import { ComputerPart } from "./ComputerPart";
import { ComputerPartVisitor } from "./ComputerPartVisitor";
import { Keyboard } from "./Keyboard";
import { Monitor } from "./Monitor";
import { Mouse } from "./Mouse";

export class Computer implements ComputerPart {

    parts: ComputerPart[];

    constructor() {
        this.parts = [new Mouse(), new Keyboard(), new Monitor()];
    }

    accept(computerPartVisitor: ComputerPartVisitor): void {
        for (let i = 0; i < this.parts.length; i++) {
            this.parts[i].accept(computerPartVisitor);
        }
        computerPartVisitor.visit(this);
    }
    toString(): string { return 'Computer' };
}