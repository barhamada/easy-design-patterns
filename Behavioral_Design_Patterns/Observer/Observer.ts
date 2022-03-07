import { Subject } from "./Subject";

export abstract class Observer {
    protected subject: Subject;
    public abstract update(): void;
 }