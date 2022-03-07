import { AbstractCustomer } from "./AbstractCustomer";

export class RealCustomer extends AbstractCustomer {

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    isNil(): boolean {
        return false;
    }
}