/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/*This is the Game class that includes a constructor that initializes the 
missed, phrases, and activePhrase properties.*/
class Game {
  constructor() {
    this.missed = 0;
    //5 phrase objects to use within game
    this.phrases = [
      new Phrase("Break a leg"),
      new Phrase("Hang in there"),
      new Phrase("Speak of the devil"),
      new Phrase("Actions speak louder than words"),
      new Phrase("Ignorance is bliss"),
    ];
    //The phrase object that's currently in play. Initial value is null.
    this.activePhrase = null;
  }

  getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }

/*This method hides the start screen overlay, sets the random active phrase
and adds it to the game board*/
  startGame() {
    screenOverlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /*This method checks if any of the letters in the random phrase have the 'hide'
class. If so, that means that the player hasn't guessed all letters correctly yet,
which means there is no win. The if statement would return true if 0 and false if
any number above 0.*/
  checkForWin() {
    let letters = document.querySelectorAll(".hide");
    if (letters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    hearts[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed > 4) {
      this.gameOver();
    }
  }

  /*This method checks if the checkForWin() method is true. If so, the player sees
  a message of congratulations. If false, the player sees a message to try again*/
  gameOver() {
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


  /*This method helps to remove a heart(life) if the player chooses the wrong letter.
Also helps to check for win when the player selects a key(letter)*/
  handleInteraction(button) {
    const buttonPress = button.textContent;
    button.setAttribute("disabled", "disabled");
    if (this.activePhrase.checkLetter(buttonPress) === false) {
      button.classList.add("wrong");
      this.removeLife();
    } else {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(buttonPress);
      const checkWin = this.checkForWin();
      if (checkWin === true) {
        this.gameOver();
      }
    }
  }

/*This method helps to reset the game phrase letters(ul), keys(keyboard),
and hearts(lives) once game is over.*/
  resetGame() {
    ul.innerHTML = "";
    keys.forEach((button) => {
      button.classList.remove("wrong");
      button.classList.remove("chosen");
      button.removeAttribute("disabled");
    });
    hearts.forEach((heart) => {
      heart.src = "images/liveHeart.png";
    });
  }
}
