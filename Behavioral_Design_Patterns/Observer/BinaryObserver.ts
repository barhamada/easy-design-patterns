import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class BinaryObserver extends Observer {

    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log(`Binary String: ${this.subject.getState().toString(2)}`);
    }
}