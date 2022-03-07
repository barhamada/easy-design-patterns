import { Memento } from "./Memento";

export class CareTaker {
    private mementoList: Memento[] = [];
 
    add(state: Memento): void{
       this.mementoList.push(state);
    }
 
    get(index: number): Memento{
       return this.mementoList[index];
    }
 }