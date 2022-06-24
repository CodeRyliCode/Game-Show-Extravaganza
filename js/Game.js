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

}

