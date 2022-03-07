import { MediaAdapter } from "./MediaAdapter";
import { MediaPlayerInterface } from "./MediaPlayerInterface";

export class AudioPlayer implements MediaPlayerInterface {
    mediaAdapter: MediaAdapter;

    play(audioType: string, fileName: string): void {

        //inbuilt support to play mp3 music files
        if (audioType.toLowerCase() === 'mp3') {
            console.log(`Playing mp3 file. Name: ${fileName}`);
        }

        //mediaAdapter is providing support to play other file formats
        else if (audioType.toLowerCase() === 'vlc' || audioType.toLowerCase() === 'mp4') {
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName);
        }

        else {
            console.log(`Invalid media. ${audioType}  format not supported`);
        }
    }
}