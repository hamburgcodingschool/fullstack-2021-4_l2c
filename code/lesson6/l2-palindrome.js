// PALINDROME
// Create a function that takes a word and returns a Boolean.

// true if the word is a palindrome, false otherwise.

// TACOCAT
// RACECAR
// NEVERODDOREVEN


// if (word.split("").reverse().join("") == word) {
//     console.log("PALINDROME");
// } else {
//     console.log("NOT PALINDROME");
// }


let word = "tacocat"
// let word = "banana";


let isPalindrome = true;
for (let i = 0; i < word.length; i++) {
    let oppositeIndex = word.length - 1 - i;
    
    let letter = word[i];
    let oppositeLetter = word[oppositeIndex];

    // console.log("INDEX: " + i + ", LETTER: " + letter);
    // console.log("OPP I: " + oppositeIndex + ", OPP: " + oppositeLetter);

    if (letter != oppositeLetter) {
        // console.log("Not a palindrome we can stop");
        isPalindrome = false;
        break;
    } else {
        // console.log("maybe let's continue");
    }
    
    // console.log("----------------")
}

if (isPalindrome) {
    console.log("Congrats you have a palindrome!");
} else {
    console.log("Better luck next time!");
}