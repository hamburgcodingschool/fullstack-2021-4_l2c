function test(number) {

    if (number == undefined) {
        console.log("Invalid Argument...");
    } else if (number > 50) {
        console.log("THAT NUMBER IS TOO HIGH!");
    } else {
        console.log("That number is ok...");
    }
}

function someOtherFunction(a, b) {
    console.log("A: " + a);
    console.log("B: " + b);
}

// test(56);
// test(20);
// test();

someOtherFunction(4, 2);
someOtherFunction(10, 10);
someOtherFunction(5);