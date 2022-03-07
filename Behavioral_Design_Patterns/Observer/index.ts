import { BinaryObserver } from "./BinaryObserver";
import { HexaObserver } from "./HexaObserver";
import { OctalObserver } from "./OctalObserver";
import { Subject } from "./Subject";

const subject: Subject = new Subject();

new HexaObserver(subject);
new OctalObserver(subject);
new BinaryObserver(subject);

console.log('First state change: 15');
subject.setState(15);
console.log('Second state change: 10');
subject.setState(10);