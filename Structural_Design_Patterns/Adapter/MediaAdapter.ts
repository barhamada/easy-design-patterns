import { AdvancedMediaPlayerInterface } from "./AdvancedMediaPlayerInterface";
import { MediaPlayerInterface } from "./MediaPlayerInterface";
import { Mp4Player } from "./Mp4Player";
import { VlcPlayer } from "./VlcPlayer";

export class MediaAdapter implements MediaPlayerInterface {
    advancedMusicPlayer: AdvancedMediaPlayerInterface;

    constructor(audioType: string) {
        if (audioType.toLowerCase() === 'vlc') {
            this.advancedMusicPlayer = new VlcPlayer();

        } else if (audioType.toLowerCase() === 'mp4') {
            this.advancedMusicPlayer = new Mp4Player();
        }
    }

    play(audioType: string, fileName: string): void {
        if (audioType.toLowerCase() === 'vlc') {
            this.advancedMusicPlayer.playVlc(fileName);
        }
        else if (audioType.toLowerCase() === 'mp4') {
            this.advancedMusicPlayer.playMp4(fileName);
        }
    }
}