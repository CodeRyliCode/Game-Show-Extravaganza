/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

let game;
const startButton = document.getElementById("btn__reset");

startButton.addEventListener('click', () => {
game = new Game();
game.startGame();

});