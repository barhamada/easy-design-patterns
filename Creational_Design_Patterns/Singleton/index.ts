import Singleton from "./Singleton";

const s1 = new Singleton();
console.log(`Count From s1 reference => ${s1.count}`);
s1.count++;

const s2 = new Singleton();
console.log(`Count From s2 reference => ${s2.count}`);

const s3 = new Singleton();
console.log(`Count From s3 reference => ${s3.count}`);