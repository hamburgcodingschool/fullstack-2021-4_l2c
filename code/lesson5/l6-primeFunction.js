// function isPrime(number) {
//     if (number < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return number > 1;
}

let number = 1; // Ask the user later
if (isPrime(number)) {
    console.log(number + " is a prime!");
} else {
    console.log(number + " is NOT a prime!");
}