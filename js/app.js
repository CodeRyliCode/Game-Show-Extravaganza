/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Variables I keep here so I am able to use them across all js pages
const screenOverlay = document.getElementById("overlay");
const ul = document.getElementById("phrase").firstElementChild;
const hearts = document.querySelectorAll(".tries img");
const keys = document.querySelectorAll(".key");

let game;
const startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

keys.forEach((button) => {
  button.addEventListener("click", () => {
    game.handleInteraction(button);
  });
});
