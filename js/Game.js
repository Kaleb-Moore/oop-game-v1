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
        let phraseList = [
            new Phrase('I know'),
            new Phrase('Winner Winner Chicken Dinner'),
            new Phrase('You got games on your phone'),
            new Phrase('STOP I almost dropped my croissant'),
            new Phrase('Ogers are like onions')
        ];

        return phraseList;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        let randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
    };

    handleInteraction(button) {
        button.disabled = true;
        const clicked = button.textContent;

        if(this.activePhrase.checkLetter(clicked)){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(clicked);
            if(this.checkForWin()) {
                this.gameOver('win');
            }
        } else {
            button.classList.add('wrong');
            this.removeLife()
        }

    }

    removeLife() {}

    checkForWin() {}

    gameOver() {}
}