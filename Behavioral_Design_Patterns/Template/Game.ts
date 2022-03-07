export abstract class Game {
    abstract initialize(): void;
    abstract startPlay(): void;
    abstract endPlay(): void;

    //template method
    play(): void {

        //initialize the game
        this.initialize();

        //start game
        this.startPlay();

        //end game
        this.endPlay();
    }
}