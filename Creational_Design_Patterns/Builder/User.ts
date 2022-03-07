import { UserBuilder } from "./UserBuilder";

export class User {
    private readonly _firstName: string;
    private readonly _lastName: string;
    private _age: number;
    private _phone: string;
    private _address: string;

    constructor(builder: UserBuilder) {
        this._firstName = builder.firstName;
        this._lastName = builder.lastName;
        this._age = builder.age;
        this._phone = builder.phone;
        this._address = builder.address;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get age(): number {
        return this._age;
    }

    public get phone(): string {
        return this._phone;
    }

    public get address(): string {
        return this._address;
    }

    public toString(): string {
        return `User: ${this._firstName}, ${this._lastName}, ${this._age}, ${this._phone}, ${this._address}`;
    }
}