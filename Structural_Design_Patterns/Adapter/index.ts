import { AudioPlayer } from "./AudioPlayer";

const audioPlayer: AudioPlayer = new AudioPlayer();

audioPlayer.play('mp3', 'beyond the horizon.mp3');
audioPlayer.play('mp4', 'alone.mp4');
audioPlayer.play('vlc', 'far far away.vlc');
audioPlayer.play('avi', 'mind me.avi');