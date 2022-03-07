import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class HexaObserver extends Observer {

    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log(`Hexa String: ${this.subject.getState().toString(16)}`);
    }
}