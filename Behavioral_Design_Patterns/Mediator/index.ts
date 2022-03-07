import { User } from "./User";

const robert: User = new User('Robert');
const john: User = new User('John');

robert.sendMessage('Hi! John!');
john.sendMessage('Hello! Robert!');