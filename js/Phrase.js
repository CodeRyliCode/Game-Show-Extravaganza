/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const ul = document.getElementById("phrase").firstElementChild;

/*This is the Phrase class that includes a constructor that receives a phrase
parameter and initializes the phrase property.*/
class Phrase {
  constructor(phrase) {

//The phrase property is converted to all lower case.
    this.phrase = phrase.toLowerCase();
  }


//This method adds letter placeholders to display when the game starts.
  addPhraseToDisplay() {
let letters = this.phrase.split("");

/*This forEach method renders the HTML for what the phrase should look like when 
the game starts*/
letters.forEach((letter) => {
  if (letter === " ") {
    ul.innerHTML += `<li class="space"> </li>`;
  } else {
    ul.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
  }
});
}

/*This method checks if the player's selected letter is in the phrase 
and returns true if so and false if not*/
checkLetter(letter) {
if (this.phrase.includes(letter)) {
  return true;
} else {
  return false;
}
}


/*This showMatchedLetter method reveals the letter(s) on the
board that matches the player's selection.A for loop is used 
to iterate through the letters. An if statement adds a 'show' class & removes the
hide class if the player's selected letter equals any of the letters 
in the random phrase.*/
showMatchedLetter(letter) {
let letters = ul.children;
for (let i = 0; i < letters.length; i++) {
  if (letter === letters[i].textContent) {
    letters[i].classList.remove('hide');
    letters[i].classList.add('show');
  }
}
}



}
