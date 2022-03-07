import { Game } from "./Game";

export class Football extends Game {

    endPlay(): void {
        console.log('Football Game Finished!');
    }

    initialize(): void {
        console.log('Football Game Initialized! Start playing.');
    }

    startPlay(): void {
        console.log('Football Game Started. Enjoy the game!');
    }
}