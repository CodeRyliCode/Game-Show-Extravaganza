/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);
const screenOverlay = document.getElementById("overlay");
const ul = document.getElementById("phrase").firstElementChild;
const hearts = document.querySelectorAll(".tries img");
const keys = document.querySelectorAll('.key')




let game;
const startButton = document.getElementById("btn__reset");

startButton.addEventListener('click', () => {
game = new Game();
game.startGame();

});