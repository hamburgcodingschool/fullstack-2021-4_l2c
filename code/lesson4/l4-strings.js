let name = "Helder Pereira";

// EXERCISE:
// 1 - Print only the first letter of the String
// 2 - How many characters does the string have
// 3 - Print all the Characters letter by letter (1 console.log per letter)
// 4 - How many times does the letter `a` appear in the name

// 1
console.log("The first letter is: " + name[0]);

// 2
console.log("The string has " + name.length + " characters");

// 3
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// 4
let counter = 0;
for (let i = 0; i < name.length; i++) {
    if (name[i] == "a" || name[i] == "A") {
        counter ++;
    }
}

// let word = "time";
// if (counter != 1) {
//     word += "s";
// } 

// console.log("The letter `a` appears " + counter + " " + word);

console.log("The letter `a` appears " + counter + " time(s)");
