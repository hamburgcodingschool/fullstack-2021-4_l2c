// Create a function
// that takes 2 arguments and returns 1 string
// The first argument is a sentence
// The secong argument is a character
// The function replaces all occurrences of that character with *

// Hello everyone
// e
// H*llo *v*ryon*

// Bonus:
// Make sure the comparison
// is case insensitive and diacritic insensitive

function isSameBaseCharacter(char, anotherChar) {
    const result = char.localeCompare(anotherChar, "en", {sensitivity: "base"});
    if (result == 0) {
        return true;
    } else {
        return false;
    }
}

function hideCharacter(sentence, character) {
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        if (isSameBaseCharacter(sentence[i], character)) {
            newSentence += "*";    
        } else {
            newSentence += sentence[i];
        }
    }
    return newSentence;
}

const example = "BaTMAN";
const changed = hideCharacter(example, "à");

console.log(changed);


// const letter = "Ü";
// const result = letter.localeCompare("u", "en", { sensitivity: "base" });

// console.log(result);