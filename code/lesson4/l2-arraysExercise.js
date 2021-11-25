let ages = [22, 30, 12, 41, 50, 42, 60, 6, 18];

// Count how many people can legally drink :D

let counter = 0;
for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
    if (ages[i] >= 18) {
       counter++; 
    }
}
console.log(counter + " people can legally drink alcohol!");