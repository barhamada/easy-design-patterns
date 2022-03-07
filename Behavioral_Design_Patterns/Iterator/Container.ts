import { Iterator } from "./Iterator";

export interface Container {
    getIterator(): Iterator;
}