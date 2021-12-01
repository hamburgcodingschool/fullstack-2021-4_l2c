// HANGMAN!!!!!

const readlineSync = require("readline-sync");

function replaceCharAt(word, position, char) {
    let subStringLeft = word.substring(0, position);
    let subStringRight = word.substring(position + 1);

    return subStringLeft + char + subStringRight;
}

function isSameBaseCharacter(char, anotherChar) {
    const result = char.localeCompare(anotherChar, "en", {sensitivity: "base"});
    if (result == 0) {
        return true;
    } else {
        return false;
    }
}

const secretPhrase = "Gotham City";
let gamePhrase = "****** ****";

while (secretPhrase != gamePhrase) {
    console.log(gamePhrase);
    console.log("Letter?");
    const userLetter = readlineSync.question("> ");

    for (let i = 0; i < secretPhrase.length; i++) {
        if (isSameBaseCharacter(secretPhrase[i], userLetter)) {
            gamePhrase = replaceCharAt(gamePhrase, i, secretPhrase[i]);
        }
    }
}

console.log("CONGRATS!!!! IT's FINALLY OVER...");
console.log(gamePhrase);

// BONUS 1:
// auto-generate gamePhrase from secretPhrase

// BONUS 2:
// adding limited tries to the game (suggestion 6)

// SUPER BONUS:
// Use ASCII ART TO SHOW THE HANGMAN :D
