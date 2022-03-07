import { User } from "./User";

export class ChatRoom {
    static showMessage(user: User, message: string): void {
        console.log(`${new Date().toDateString()} [${user.getName()}] : ${message}`);
    }
}