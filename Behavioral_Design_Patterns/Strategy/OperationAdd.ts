import { Strategy } from "./Strategy";

export class OperationAdd implements Strategy {

    doOperation(num1: number, num2: number): number {
        return num1 + num2;
    }
}