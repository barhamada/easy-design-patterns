import { AdvancedMediaPlayerInterface } from "./AdvancedMediaPlayerInterface";

export class VlcPlayer implements AdvancedMediaPlayerInterface{

    playVlc(fileName: string): void {
        console.log(`Playing vlc file. Name: ${fileName}`);
    }
    playMp4(fileName: string): void {
        //do nothing
    }
    
 }