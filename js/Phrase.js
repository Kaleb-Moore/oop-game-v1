/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const displayPhrase = document.querySelector('#phrase ul');
        let letters = this.phrase.split('');
        letters.forEach((letter) => {
            if(letter === ' '){
                displayPhrase.insertAdjacentHTML('beforeend', `
                <li class="space">${letter}</li>
                `);
            } else {
                displayPhrase.insertAdjacentHTML('beforeend', `
                <li class="hide letter ${letter}">${letter}</li>
                `);
            }
        });
    }

    /**
     * @param {string} letter - letter to check 
     * @returns {boolean} true - if the letter is in the string
     */
    checkLetter(letter) {
      return this.phrase.includes(letter);
    }

    /**
     * @param {string} letter - Letter on the button that was clicked
     * Checks the button that was clicked to see if there are matches for the phrase.
     * If there is it shows that Letter of the phrase. 
     */
    showMatchedLetter(letter) {
        const correctLetter = document.getElementsByClassName(letter);
        for(let i = 0; i < correctLetter.length; i++) {
            correctLetter[i].classList.replace('hide', 'show');
        }
    }

}