// ARRAY

// let x = [23, 12, 4, 2, 5, 6, 10, 5, 2, 1, 34, 3, 5];

// console.log( x[0] );
// console.log( x[1] );
// console.log( x[2] );
// console.log( x[3] );
// console.log( x[4] );
// console.log( x[5] );
// console.log( x[6] );

// console.log(x.length);

let x = [23, 12, 4, 2, 5, 6, 10, 5, 2, 1, 34, 3, 5];

let counter = 0;
for (let i = 0; i < x.length; i++) {
    console.log(i + ": " + x[i]);
    if (x[i] == 5) {
        // console.log("YAY it's a FIVE!!!!!!");
        counter ++;
    }
}
// console.log(counter);
console.log("The number 5 shows up " + counter + " times");

// EXERCISE:
// 1 - Copy the above code, make sure it's working and you understand it
// 2 - Print how many times the number `5` shows up in your array