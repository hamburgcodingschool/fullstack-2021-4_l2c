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

function rectanglePerimeter(width, length) {

}

function circleArea(radius) {

}



// HOMEWORK
// 1 - Create a function that calculates the perimeter of a rectangle
// 2 - Create a function that calculates the area of a rectangle
// 3 - Create a function that calculates the circumference of a circle
// 4 - Create a function that calculates the area of a circle