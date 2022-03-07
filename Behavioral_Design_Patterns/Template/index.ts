import { Cricket } from "./Cricket";
import { Football } from "./Football";
import { Game } from "./Game";

let game: Game = new Cricket();
game.play();

console.log('');

game = new Football();
game.play();	