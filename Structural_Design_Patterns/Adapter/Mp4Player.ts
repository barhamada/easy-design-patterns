import { AdvancedMediaPlayerInterface } from "./AdvancedMediaPlayerInterface";

export class Mp4Player implements AdvancedMediaPlayerInterface{
    playVlc(fileName: string): void {
        // do nothing
    }
    playMp4(fileName: string): void {
        console.log(`Playing mp4 file. Name: ${fileName}`);
    }

}