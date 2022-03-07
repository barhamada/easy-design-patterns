import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class OctalObserver extends Observer {

    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log(`Octal String: ${this.subject.getState().toString(8)}`);
    }
}