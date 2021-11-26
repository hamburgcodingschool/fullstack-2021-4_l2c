// HOMEWORK
// 1 - Create a function that calculates the perimeter of a rectangle
// 2 - Create a function that calculates the area of a rectangle
// 3 - Create a function that calculates the circumference of a circle
// 4 - Create a function that calculates the area of a circle

function rectanglePerimeter(width, length) {

    let result = width * 2 + length * 2;
    // let result = width + width + length + length;
    // let result = (width + length) * 2;
    console.log("Rectangle Perimeter W:" + width + ", H: " + length + " = " + result);
}

function rectangleArea(width, length) {
    let result = width * length;
    console.log("Rectangle Area W:" + width + ", H: " + length + " = " + result);
}

function circleArea(radius) {
    // let result = Math.PI * radius * radius;
    // let result = Math.PI * Math.pow(radius, 2);
    let result = Math.PI * radius ** 2;

    console.log("Circle Area R:" + radius + " = " + result);
}

function circumference(radius) {
    let result = Math.PI * radius * 2;

    console.log("Circumference R:" + radius + " = " + result);
}

rectanglePerimeter(10, 10);
rectanglePerimeter(5, 2);
rectanglePerimeter(10, 5);

rectangleArea(10, 10);
rectangleArea(5, 2);
rectangleArea(10, 5);

circleArea(10);
circleArea(5);
circleArea(2);

circumference(10);
circumference(5);
circumference(2);