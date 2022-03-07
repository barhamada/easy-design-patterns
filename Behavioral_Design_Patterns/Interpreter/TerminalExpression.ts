import { Expression } from "./Expression";

export class TerminalExpression implements Expression {

    private data: string;

    constructor(data: string) {
        this.data = data;
    }

    interpret(context: string): boolean {
        if (context.includes(this.data)) {
            return true;
        }
        return false;
    }
}