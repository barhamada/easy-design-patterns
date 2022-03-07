import { ChatRoom } from "./ChatRoom";

export class User {
    private name: string;

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    constructor(name: string) {
        this.name = name;
    }

    sendMessage(message: string): void {
        ChatRoom.showMessage(this, message);
    }
}