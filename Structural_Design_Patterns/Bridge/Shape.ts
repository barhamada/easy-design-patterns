import { DrawApiInterface } from "./DrawApiInterface";

export abstract class Shape {
    protected drawAPI: DrawApiInterface;

    constructor(drawAPI: DrawApiInterface) {
        this.drawAPI = drawAPI;
    }
    public abstract draw(): void;
}