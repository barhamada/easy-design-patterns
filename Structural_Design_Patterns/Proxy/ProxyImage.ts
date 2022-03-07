import { ImageI } from "./Image";
import { RealImage } from "./RealImage";

export class ProxyImage implements ImageI {

    private realImage: RealImage;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    display(): void {
        if (this.realImage == null) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}