import { AbstractCustomer } from "./AbstractCustomer";

export class NullCustomer extends AbstractCustomer {

    getName(): string {
        return 'Not Available in Customer Database';
    }

    isNil(): boolean {
        return true;
    }
}