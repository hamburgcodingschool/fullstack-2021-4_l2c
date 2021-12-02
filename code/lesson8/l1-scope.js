
// function doSomething(arg1) {
//     arg1 = 10;
//     return arg1;
// }

// let x = 20;
// x = doSomething(x);

// console.log(x);




function doSomething(arg1) {
    arg1[1] = 5;
}

let x = [0, 0, 0];
doSomething(x);
console.log(x);