// Ask the user for a word, and dash it up!
// banana
// b-a-n-a-n-a

// for (let i = 0; i < word.length; i++) {
    
//     if (i < word.length - 1) {
//         dashedWord += word[i] + "-";
//     } else {
//         dashedWord += word[i];
//     }
    
// }
// console.log(dashedWord);

function dashItUp(word) {
    let dashedWord = "";
    for (let i = 0; i < word.length; i++) {
    
        if (i > 0) {
            dashedWord += "-";
        }
        dashedWord += word[i];
        
    }
    return dashedWord;
}

let word = "banana";
let dashed = dashItUp(word);
console.log(dashed);

// let word2 = "test";
// let array1 = ["t", "e", "s", "t"];

// // Arrays are Mutable
// // Strings are Immutable

// array1[0] = "Y";
// word2[0] = "Y";

// console.log(array1);
// console.log(word2);

// word2 = "TEST TEST 124";
// console.log(word2);