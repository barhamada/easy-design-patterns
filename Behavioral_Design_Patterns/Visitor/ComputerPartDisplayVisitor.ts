import { Computer } from "./Computer";
import { ComputerPartVisitor } from "./ComputerPartVisitor";
import { Keyboard } from "./Keyboard";
import { Monitor } from "./Monitor";
import { Mouse } from "./Mouse";

export class ComputerPartDisplayVisitor implements ComputerPartVisitor {
    visit(part: Computer | Mouse | Keyboard | Monitor): void {
        console.log(`Displaying ${part}.`);
    }
}