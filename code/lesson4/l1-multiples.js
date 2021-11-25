// Print all the numbers from 1 to 100
// Add ! if the number is a multiple of 3
// Add !! if the number is a multiple of 5
// Add !!! if the number is a multiple of 15
// 1
// 2
// 3!
// 4
// 5!!
// 6!
// ...
// 14
// 15!!!
// 16
// ...

// SOLUTION 1
// for (let i = 1; i <= 100; i++) {
    
//     if (i % 15 == 0) {
//         console.log(i + "!!!");
//     } else if (i % 5 == 0) {
//         console.log(i + "!!");
//     } else if (i % 3 == 0) {
//         console.log(i + "!");
//     } else {
//         console.log(i);
//     }
// }

// SOLUTION 2
for (let i = 1; i <= 100; i++) {
    let extra = "";

    if (i % 3 == 0) {
        extra += "!";
    }
    if (i % 5 == 0) {
        extra += "!!";
    }

    console.log(i + extra);
}