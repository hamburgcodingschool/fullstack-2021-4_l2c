// Prime Number
// Ask the user for a number
// tell the user if the number is a Prime or not

// cannot be a prime `if` the `remainder` of the division between
// itself and other numbers is 0
// so we need to loop to check all the possibilities


// Like this but in a `for` loop :D
// if (number % 6 == 0)
// if (number % 5 == 0)
// if (number % 4 == 0)
// if (number % 3 == 0)
// if (number % 2 == 0)

let number = 7; // ASK THE USER LATER...
let multiplesCounter = 0;

for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        multiplesCounter++;
    }
    console.log(i + ": " + number % i);
}

console.log(multiplesCounter);
if (multiplesCounter > 0) {
    console.log(number + " is NOT a prime!");
} else {
    console.log(number + " is a prime!");
}