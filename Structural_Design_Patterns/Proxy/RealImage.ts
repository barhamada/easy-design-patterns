import { ImageI } from "./Image";

export class RealImage implements ImageI {

    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }

    display(): void {
        console.log(`Displaying ${this.fileName}`);
    }

    private loadFromDisk(fileName: string): void {
        console.log(`Loading ${fileName}`);
    }
}