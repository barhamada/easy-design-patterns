import { Container } from "./Container";
import { Iterator } from "./Iterator";

export class NameRepository implements Container {
    names: string[] = ['Robert', 'John', 'Julie', 'Lora'];

    getIterator(): Iterator {
        return new this.NameIterator(this);
    }

    NameIterator = class {

        index: number = 0;

        constructor(public superThis: NameRepository) { }

        hasNext(): boolean {

            if (this.index < this.superThis.names.length) {
                return true;
            }
            return false;
        }

        next(): Object {

            if (this.hasNext()) {
                return this.superThis.names[this.index++];
            }
            return null;
        }
    }
}
