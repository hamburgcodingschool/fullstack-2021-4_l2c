function reverseWord(word) {
    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }
    return reverse;    
}

let word = "boba";

if (word == reverseWord(word)) {
    console.log("PALINDROME!");
} else {
    console.log("Not quite my friend...");
}




// EXAMPLE OF A FUNCTION CALL IN A CONSOLE LOG
// FUNCTION CALLS CAN BE USER ANYWHERE THAT TAKES VALUES
// THE VALUE USED IS THE RETURN...
function test1(x) {
    if (x) {
        return "Hello";
    } else {
        return "Goodbye";
    }
    
}

console.log( test1(true) + " Oliver");



