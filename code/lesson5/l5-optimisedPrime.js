let number = 26;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
    // console.log(i + ": " + number % i);
}

if (isPrime) {
    console.log(number + " is a prime!");
} else {
    console.log(number + " is NOT a prime!");
}