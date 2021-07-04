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
    * Also resets defaults if you've already played
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        overlay.classList.remove('win', 'lose')
        let randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();

    };

    /**
     *  @param {button} button - target that is clicked onscreen keyboard
     * Gets buttons letter and checks if any letter in phrase matchs
     * If it matches then showMatchedLetter is called and we reveal the letter
     */
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

    /**
     * Selects Hearts at bottom of page and replaces the filled heart with
     * empty heart if you guess a letter incorrectly.
     * If you guess incorrectly 5 times it ends the game.
     */
    removeLife() {
        const hearts = document.querySelector('ol img[src="images/liveHeart.png"');
        hearts.src = 'images/lostHeart.png';
        this.missed++;

        if (this.missed === 5) {
            this.gameOver('lose');
        }

    }

    /**
     * @returns {Boolean} true - if the entire phrase has been guessed
     */
    checkForWin() {
        const correct = document.querySelector('#phrase ul').children;
        let guessedCorrect = 0;
        for(let i = 0; i < correct.length; i++) {
            if(correct[i].classList.contains('show') || correct[i].classList.contains('space')) {
                guessedCorrect++;
            }
        }
        return guessedCorrect === correct.length;
    }

    /**
     * @param {string} winLoss - win displays one screen and lose displays another 
     * Sets overlay page to visible again, and displays end message.
     * Removes all list and any tags created during any previous games.
     */
    gameOver(winLoss) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        overlay.classList.add(winLoss);

        document.getElementById('game-over-message').innerHTML = `You ${winLoss}`;

        document.querySelector('#phrase ul').innerHTML = '';
        const buttons = document.querySelectorAll('button');
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].removeAttribute('disabled');
            buttons[i].classList.remove('chosen')
            buttons[i].classList.remove('wrong')
        }
        const hearts = document.querySelectorAll('ol img');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = 'images/liveHeart.png';
        }
    }
}