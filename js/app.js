/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Listens for any key presses and passes and checks that key
 * press to handeleInteraction if its a valid key.
 */
const keys = document.getElementsByClassName('key');


/**
 * Set start screen background
 */
 const overlay = document.getElementById('overlay');
 overlay.style.backgroundImage = "url('images/Start\ background.jpg')";
 overlay.style.backgroundRepeat = 'no-repeat';
 overlay.style.backgroundPosition = 'center';

 const title = document.querySelector('h2');
 title.style.color = "#000000";
 
/**
 * Calls game start
 * Handles keyup listener only when the overlay isn't showing
 */
let game = 
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();

    document.addEventListener('keyup', e => {
        if(overlay.style.display === 'none') {
            let keyPressed = e.key;
            for(let i = 0; i < keys.length; i++) {
                if(keys[i].innerHTML === keyPressed)
                    if(keys[i].disabled) {
                        continue;
                    } else {
                        game.handleInteraction(keys[i]);
                    }
            }
        }
    });

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