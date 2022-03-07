import { Order } from "./Order";

export class Broker {
    private orderList: Order[] = [];

    takeOrder(order: Order): void {
        this.orderList.push(order);
    }

    placeOrders(): void {
        for (const order of this.orderList) {
            order.execute();
        }
        this.orderList.length = 0;
    }
}