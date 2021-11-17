let a = 34;
let b = 3;

// EXERCISE 1: Print on screen only the highest of the 2

if (a > b) {
    console.log("The highest is " + a);
} else {
    console.log("The highest is " + b);
}

// EXERCISE 2: Add a new variable `c`. Print on screen only the highest of the 3

// SOLUTION 1:
if (a > b) {
    if (a > c) {
        console.log("The highest is " + a);
    } else {
        console.log("The highest is " + c);
    }
} else {
    if (b > c) {
        console.log("The highest is " + b);
    } else {
        console.log("The highest is " + c);
    }
}

// SOLUTION 2:

let max = a;

if (b > max) {
    max = b;
}

if (c > max) {
    max = c;
}

console.log("The highest is " + max);
