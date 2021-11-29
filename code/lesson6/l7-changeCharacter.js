// change the second character in the word to the letter Z
// Google: javascript substring

let word = "Banana";

// BZnana? 😅

let newWord = word.substring(0, 1);
console.log(newWord);

// 1 - use `substring`
// 2 - use `substr` instead
// 3 - use a for loop to build a new String char by char
// 4 - `split`, change the position, `join`
