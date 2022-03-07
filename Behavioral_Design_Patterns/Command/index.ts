import { Broker } from "./Broker";
import { BuyStock } from "./BuyStock";
import { SellStock } from "./SellStock";
import { Stock } from "./Stock";

const abcStock: Stock = new Stock();

const buyStockOrder: BuyStock = new BuyStock(abcStock);
const sellStockOrder: SellStock = new SellStock(abcStock);

const broker: Broker = new Broker();
broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);

broker.placeOrders();