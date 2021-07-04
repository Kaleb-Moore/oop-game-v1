/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        let phraseList = [];
        phraseList.push(new Phrase('I know'));
        phraseList.push(new Phrase('Winner Winner Chicken Dinner'));
        phraseList.push(new Phrase('You got games on your phone'));
        phraseList.push(new Phrase('STOP I almost dropped my croissant'));
        phraseList.push(new Phrase('Ogers are like onions'));

        return phraseList;
    };

    get randomPhrase() {
        return this.getRandomPhrase();
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        const startBtn = document.getElementById('btn__reset');
        startBtn.addEventListener('click', e => { 
            overlay.style.display = 'none';
        });
        this.activePhrase = this.randomPhrase;
        this.randomPhrase.addPhraseToDisplay(this.activePhrase);
    };
}