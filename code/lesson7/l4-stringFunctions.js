// EXERCISE:
// make a String Secret
// create a function that takes a string
// and replaces each character with *
// Beware of spaces...

// Example: Dog -> ***
// Example: Wet dog -> *** ***

let word = "Hello Hello";
let secretWord = "";

for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") {
        secretWord += " ";
    } else {
        secretWord += "*";
    }
}

console.log(secretWord);
console.log(`BTW the secret is ${word}`);