// var listener = new window.keypress.Listener();

var wins = 0;
var losses = 0;
const maxGuesses = 10;
var guessesLeft = maxGuesses;
var lettersGuessed = [];

var keyPressed = KeyboardEvent;
var correctLetter = "f";

// document.write(letterGuessed);

document.addEventListener('keypress', guessLetter);

function guessLetter(keyPressed) {
    var letterGuessed = keyPressed.key;
    console.log(letterGuessed);

    if (letterGuessed !== correctLetter) {

        if (lettersGuessed.indexOf(letterGuessed) === -1) {
            lettersGuessed.push(letterGuessed);
            guessesLeft--;

            if (guessesLeft === 0) {
                // Resets game
                guessesLeft = maxGuesses;
                lettersGuessed = [];
                losses++;
                // correctLetter = generateRandomLetter();
            }
        }
    } else {
        wins++;
        console.log("winner!");

        // Resets game
        guessesLeft = maxGuesses;
        lettersGuessed = [];
    }
    printStats();
}

function printStats() {

    var winsText = document.getElementById("wins");
    winsText.innerHTML = "Wins: " + wins;

    var lossesText = document.getElementById("losses");
    lossesText.innerHTML = "Losses: " + losses;

    var guessesLeftText = document.getElementById("guesses-left");
    guessesLeftText.innerHTML = "Guesses left: " + guessesLeft;

    var guessesSoFarText = document.getElementById("guesses-so-far");
    guessesSoFarText.innerHTML = "Your guesses so far: " + lettersGuessed;

}

// Retrieved from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// function generateRandomLetter() {
//     var result = '';
//     var characters       = 'abcdefghijklmnopqrstuvwxyz';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//  }