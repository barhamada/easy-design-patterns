import { User } from "./User";

export class UserBuilder {
    private readonly _firstName: string;
    private readonly _lastName: string;
    private _age: number;
    private _phone: string;
    private _address: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
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

    public setAge(age: number): UserBuilder {
        this._age = age;
        return this;
    }

    public setPhone(phone: string): UserBuilder {
        this._phone = phone;
        return this;
    }

    public setAddress(address: string): UserBuilder {
        this._address = address;
        return this;
    }

    //Return the finally constructed User object
    public build(): User {
        const user: User = new User(this);
        return user;
    }
}