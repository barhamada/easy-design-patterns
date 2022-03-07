import { Context } from "./Context";
import { StartState } from "./StartState";
import { StopState } from "./StopState";

const context: Context = new Context();

const startState: StartState = new StartState();
startState.doAction(context);

console.log(context.getState().toString());

const stopState: StopState = new StopState();
stopState.doAction(context);

console.log(context.getState().toString());