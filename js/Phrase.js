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
    addPhraseToDisplay(phrase) {
        const displayPhrase = document.querySelector('#phrase ul');
        let letters = phrase.phrase.split('');
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

}