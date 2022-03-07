import { Strategy } from "./Strategy";

export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(num1: number, num2: number): number {
        return this.strategy.doOperation(num1, num2);
    }
}