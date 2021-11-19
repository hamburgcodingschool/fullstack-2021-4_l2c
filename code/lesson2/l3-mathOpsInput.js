let readlineSync = require("readline-sync");

// ask the user for a number
// ask the user for another number
// print the 5 simple math operations for those 2 numbers

console.log("What's the first number?");
let a = readlineSync.question("> ");
a = parseInt(a);

console.log("What's the second number?");
let b = readlineSync.question("> ");
b = parseInt(b);

let sum = a + b;
let sub = a - b;
let mult = a * b;
let divi = a / b;
let modu = a % b;

console.log(a + " + " + b + " = " + sum);
console.log(a + " - " + b + " = " + sub);
console.log(a + " x " + b + " = " + mult);
console.log(a + " / " + b + " = " + divi);
console.log(a + " mod " + b + " = " + modu);