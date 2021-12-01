// change the second character in the word to the letter Z
// Google: javascript substring

let word = "Banana";

// BZnana? 😅

// let newWord = word.substring(3, 5);
// console.log(newWord);

let subStringLeft = word.substring(0, 1);
let subStringRight = word.substring(2);

let newWord = subStringLeft + "Z" + subStringRight;

console.log(newWord);


// 1 - use `substring`
// 2 - use `substr` instead
// 3 - use a for loop to build a new String char by char
// 4 - `split`, change the position, `join`

function replaceCharAt(word, position, char) {
    let subStringLeft = word.substring(0, position);
    let subStringRight = word.substring(position + 1);

    return subStringLeft + char + subStringRight;
}

function replaceCharAt4(word, position, char) {
    let letters = word.split("");
    letters[position] = char;
    let newWord = letters.join("");

    return newWord;
}

let anotherNewWord = replaceCharAt4("YOYOYO", 3, "Z");
console.log(anotherNewWord);


