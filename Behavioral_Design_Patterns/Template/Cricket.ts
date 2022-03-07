import { Game } from "./Game";

export class Cricket extends Game {

    endPlay(): void {
        console.log('Cricket Game Finished!');
    }

    initialize(): void {
        console.log('Cricket Game Initialized! Start playing.');
    }

    startPlay(): void {
        console.log('Cricket Game Started. Enjoy the game!');
    }
}