import { NameRepository } from "./NameRepository";

const namesRepository: NameRepository = new NameRepository();

const iter = namesRepository.getIterator();

while (iter.hasNext()) {
    const name = iter.next();
    console.log(`Name : ${name}`);
} 