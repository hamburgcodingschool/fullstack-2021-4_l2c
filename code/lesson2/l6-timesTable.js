
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// ...
// 3 x 10 = 30

// calculate and print the multiplication table for the number in the variable.

let number = 7;

let counter = 1;
while (counter <= 10) {
    
    let result = number * counter;
    
    console.log(number + " x " + counter + " = " + result);
    
    counter = counter + 1;
}
