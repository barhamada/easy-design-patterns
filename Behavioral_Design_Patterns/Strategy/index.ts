import { Context } from "./Context";
import { OperationAdd } from "./OperationAdd";
import { OperationMultiply } from "./OperationMultiply";
import { OperationSubstract } from "./OperationSubstract";

let context: Context = new Context(new OperationAdd());
console.log(`10 + 5 = ${context.executeStrategy(10, 5)}`);

context = new Context(new OperationSubstract());
console.log(`10 - 5 = ${context.executeStrategy(10, 5)}`);

context = new Context(new OperationMultiply());
console.log(`10 * 5 = ${context.executeStrategy(10, 5)}`);