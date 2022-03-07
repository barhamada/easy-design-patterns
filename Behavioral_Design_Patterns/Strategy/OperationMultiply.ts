import { Strategy } from "./Strategy";

export class OperationMultiply implements Strategy {

    doOperation(num1: number, num2: number): number {
        return num1 * num2;
    }
}