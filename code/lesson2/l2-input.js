let readlineSync = require("readline-sync");

// Ask the user for their first name
// Ask the user for their last name
// concatenate into a fullname variable
// print a greeting to the user

console.log("What's your first name?");
let firstName = readlineSync.question("> ");

console.log("What's your last name?");
let lastName = readlineSync.question("> ");

let name = firstName + " " + lastName;

console.log("Hi " + name + " welcome to Learn to Code!");

