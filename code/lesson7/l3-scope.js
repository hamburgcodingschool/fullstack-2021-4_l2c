const x = 200;

if (x > 20) {
    const y = 22;
    console.log(x);
    if (y > 15) {
        console.log(y);
    }
}

// console.log(y);
function ttt() {
    if (true) {
        anotherVariable = "Hello"
    }
    console.log(x);
} 




let z = "something";
console.log(z);

// var IS WEIRD DON'T USE IT!
// ALWAYS USE let OR const
// ALWAYS DECLARE YOUR VARIABLES
// DON'T USE GLOBALS

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(` ${i} , ${j} `);
    }
}