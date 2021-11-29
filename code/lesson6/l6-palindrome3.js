// let word = "hello";

// let wordArray = word.split("");
// let reverseWordArray = wordArray.reverse();
// let reverseWord = reverseWordArray.join("");

// console.log(reverseWord);

// if (word == reverseWord) {
//     console.log("PALINDROME");
// } else {
//     console.log("NOT PALINDROME");
// }

function isPalindrome(word) {
    return word == word.split("").reverse().join("");
}

let word = "bob"
if (isPalindrome(word)) {
    console.log("PALINDROME");
} else {
    console.log("NOT PALINDROME");
}