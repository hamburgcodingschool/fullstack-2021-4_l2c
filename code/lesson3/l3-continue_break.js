let readlineSync = require("readline-sync");


// let counter = 0;

// while (counter < 10) {
//     console.log(counter);
//     counter++;

//     if (counter >= 5) {
//         continue;
//     }
//     console.log(" Hello ");
// }

// console.log("THE END!!!!");

let secretPin = 1234;

console.log("What's your PIN number?");
let pin = readlineSync.question("> ");

let counter = 3;
while (pin != secretPin) {
    counter--;
    console.log("That's wrong try again. You have " + counter + " tries left.");

    if (counter == 0) {
        break;
    }
    pin = readlineSync.question("> ");
}

if (pin == secretPin) {
    console.log("YAY you're in the matrix!");
} else {
    console.log("Wrong PIN, try the PUK. (it will be implemented later)");
}
