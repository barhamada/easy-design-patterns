import { Context } from "./Context";
import { State } from "./State";

export class StartState implements State {

    doAction(context: Context): void {
        console.log('Player is in start state');
        context.setState(this);
    }

    toString(): string {
        return 'Start State';
    }
}