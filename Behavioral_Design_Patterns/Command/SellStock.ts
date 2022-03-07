import { Order } from "./Order";
import { Stock } from "./Stock";

export class SellStock implements Order {
    private abcStock: Stock;

    constructor(abcStock: Stock) {
        this.abcStock = abcStock;
    }

    execute(): void {
        this.abcStock.sell();
    }
}