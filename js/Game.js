/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
    new Phrase('Break a leg'),
    new Phrase('Hang in there'),
    new Phrase('Speak of the devil'),
    new Phrase('Actions speak louder than words'),
    new Phrase('Ignorance is bliss')
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase]; 
  };

startGame() {
// const screenOverlay = document.getElementById("overlay");
screenOverlay.style.display = "none";
this.activePhrase = this.getRandomPhrase();
this.activePhrase.addPhraseToDisplay();

}
checkForWin() {
    let letters = document.querySelectorAll(".hide");
    if (letters.length === 0) {
      return true;
    } else {
      return false;
    }
}

removeLife() {
// const hearts = document.querySelectorAll(".tries img");
hearts[this.missed].src = "images/lostHeart.png";
this.missed += 1;
if (this.missed > 4) {
  this.gameOver();
}

}

gameOver() {
    // const screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = "";
    if (this.checkForWin() === true) {
      document.getElementById("game-over-message").innerHTML =
        "Awesome! Way to Go! You guessed the phrase :)";
      overlay.className = "win";
      this.resetGame();
      return true;
    } else {
      document.getElementById(
        "game-over-message"
      ).innerHTML = `Sorry that's not the correct phrase. Try again :)`;
      overlay.className = "lose";
      this.resetGame();
      return false;
    }

}


handleInteraction() {


}

resetGame() {
    ul.innerHTML = '';
    keys.forEach(button => {
        button.classList.remove('wrong');
        button.classList.remove('chosen');
        button.removeAttribute('disabled')

    })
    hearts.forEach(heart =>{
      heart.src = 'images/liveHeart.png';
  })
}
}



