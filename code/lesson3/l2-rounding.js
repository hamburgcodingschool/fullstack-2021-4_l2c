
let x = 23.5494126534;

// x = Math.round(x);
// x = Math.ceil(x);
// x = Math.floor(x);

// x = Math.round(x * 100) / 100;
x = x.toFixed(2); // beware this returns a String not a Number

console.log(x);