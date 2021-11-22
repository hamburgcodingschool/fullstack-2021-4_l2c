let number = 5; // ask user for input later

// console.log((number * number + number) / 2);

let counter = 1;
let total = 0;
let stringResult = "";

while (counter <= number) {
    total += counter; // total = total + counter;    
    
    // console.log(counter);
    // console.log(total);
    // console.log("-------");


    // if (counter > 1) {
    //     stringResult = stringResult + " + " + counter;
    // } else {
    //     stringResult = stringResult + counter;
    // }
    
    if (counter > 1) {
        stringResult += " + ";
    }
    stringResult += counter;

    counter++; // counter = counter + 1;
}

stringResult += " = " + total;

console.log(stringResult);