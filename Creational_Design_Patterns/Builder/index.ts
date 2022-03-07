import { UserBuilder } from "./UserBuilder";

const user1 = new UserBuilder('Baye', 'Niass')
	.setAge(77)
	.setPhone('+1 234 5678')
	.setAddress('Fake address 1234')
	.build();

console.log(user1.toString());

const user2 = new UserBuilder('Tom', 'Cruise')
	.setAge(30)
	.setPhone('+1 987 6542')
	.setAddress('Fake address 4321')
	.build();

console.log(user2.toString());