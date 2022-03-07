export class Stock {

    private name = 'ABC';
    private quantity = 10;

    buy(): void {
        console.log(`Stock [ Name: ${this.name}, Quantity: ${this.quantity} bought`);
    }

    sell(): void {
        console.log(`Stock [ Name: ${this.name}, Quantity: ${this.quantity} sold`);
    }
}