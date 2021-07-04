/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Calls game start
 */
let game = 
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

/**
 * Listens for buttons clicked onscreen and calls the game to see
 * if any match the phrase.
 */
document.getElementById('qwerty').addEventListener('click', e => {
    if(e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target)
    }
});
