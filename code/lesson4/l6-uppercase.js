
let name = "Bob";

// EXAMPLE 1
// Converting the variable value to UpperCase

// name = name.toUpperCase()
// console.log(name);


// EXAMPLE 2
// checking if a letter exists (in either upper or lowercase)

for (let i = 0; i < name.length; i++) {
    
    console.log(name[i]);

    if (name[i].toLowerCase() == "b") {
        console.log("Found a 🐝!")
    }
}