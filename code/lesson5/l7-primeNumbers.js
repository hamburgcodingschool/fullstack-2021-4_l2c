function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return number > 1;
}

// EXERCISE 1:
// Print only the prime numbers between 1 and 10_000
for (let i = 1; i <= 10000; i++) {
    if ( isPrime(i) ) {
        console.log(i);
    }
}

// EXERCISE 2:
// Print the first 10_000 prime numbers
let counter = 0;
let number = 2;
while (counter < 100) {
    if (isPrime(number)) {
        counter++;
        console.log(counter + ": " + number);
    }
    number++;
}
