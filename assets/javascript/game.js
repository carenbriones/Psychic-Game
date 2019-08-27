// var listener = new window.keypress.Listener();

var wins = 0;
var losses = 0;
const maxGuesses = 10;
var guessesLeft = maxGuesses;
var lettersGuessed = [];

var keyPressed = KeyboardEvent;
var correctLetter = generateRandomLetter();

document.addEventListener('keypress', guessLetter);

function guessLetter(keyPressed) {
    var letterGuessed = keyPressed.key;
    console.log(correctLetter);

    // If letter guessed is incorrect
    if (letterGuessed !== correctLetter) {
        
        // If letter has not been guessed already
        if (lettersGuessed.indexOf(letterGuessed) === -1) {
            lettersGuessed.push(letterGuessed);
            guessesLeft--;

            // If there are no guesses left, user loses
            if (guessesLeft === 0) {
                resetGame();
                losses++;
            }
        }
    } else { // If user guesses correct letter
        wins++;
        console.log("winner!");
        resetGame();
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

//Retrieved from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function generateRandomLetter() {
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var result = characters[Math.floor(Math.random() * characters.length)];
    return result;
 }

function resetGame(){
    guessesLeft = maxGuesses;
    lettersGuessed = [];
    correctLetter = generateRandomLetter();
}