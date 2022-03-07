import { Context } from "./Context";
import { State } from "./State";

export class StopState implements State {

    doAction(context: Context): void {
        console.log('Player is in stop state');
        context.setState(this);
    }

    toString(): string {
        return 'Stop State';
    }
}