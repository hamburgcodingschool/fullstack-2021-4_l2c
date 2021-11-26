// HOMEWORK
// 1 - Create a function that calculates the perimeter of a rectangle
// 2 - Create a function that calculates the area of a rectangle
// 3 - Create a function that calculates the circumference of a circle
// 4 - Create a function that calculates the area of a circle

function rectanglePerimeter(width, length) {
    return (width + length) * 2;
}

function rectangleArea(width, length) {
    return width * length;
}

function circleArea(radius) {
    return Math.PI * radius ** 2;
}

function circumference(radius) {
    return Math.PI * radius * 2;
}

console.log( rectanglePerimeter(10, 10) );
console.log( rectanglePerimeter(5, 2) );
console.log( rectanglePerimeter(10, 5) );

console.log( rectangleArea(10, 10) );
console.log( rectangleArea(5, 2) );
console.log( rectangleArea(10, 5) );

console.log( circleArea(10) );
console.log( circleArea(5) );
console.log( circleArea(2) );

console.log( circumference(10) );
console.log( circumference(5) );
console.log( circumference(2) );