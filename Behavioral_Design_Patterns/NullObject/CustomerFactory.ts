import { AbstractCustomer } from "./AbstractCustomer";
import { NullCustomer } from "./NullCustomer";
import { RealCustomer } from "./RealCustomer";

export class CustomerFactory {

    static names: string[] = ['Rob', 'Joe', 'Julie'];

    static getCustomer(name: string): AbstractCustomer {

        for (let i = 0; i < CustomerFactory.names.length; i++) {
            if (CustomerFactory.names[i].toLowerCase() === name.toLowerCase()) {
                return new RealCustomer(name);
            }
        }
        return new NullCustomer();
    }
}