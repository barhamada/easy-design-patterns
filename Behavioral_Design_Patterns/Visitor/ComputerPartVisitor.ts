import { Computer } from "./Computer";
import { Keyboard } from "./Keyboard";
import { Monitor } from "./Monitor";
import { Mouse } from "./Mouse";

export interface ComputerPartVisitor {
    visit(computer: Computer): void;
    visit(mouse: Mouse): void;
    visit(keyboard: Keyboard): void;
    visit(monitor: Monitor): void;
}