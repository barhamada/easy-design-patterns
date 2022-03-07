import { Observer } from "./Observer";

export class Subject {

    private observers: Observer[] = [];
    private state: number;

    getState(): number {
        return this.state;
    }

    setState(state: number): void {
        this.state = state;
        this.notifyAllObservers();
    }

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyAllObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}