import { Context } from "./Context";

export interface State {
    doAction(context: Context): void;
}