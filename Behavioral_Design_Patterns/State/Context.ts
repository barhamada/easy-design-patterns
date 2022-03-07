import { State } from "./State";

export class Context {
    private state: State;

    constructor() {
        this.state = null;
    }

    setState(state: State): void {
        this.state = state;
    }

    getState(): State {
        return this.state;
    }
}