function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return num > 1;
}

// EXERCISE 1:
// Print only the prime numbers between 1 and 10_000

// EXERCISE 2:
// Print the first 10_000 prime numbers