let names = [
    "John",
    "Bob",
    "Martha",
    "Jack",
    "Roxanne",
    "Bob",
    "Joe",
    "Hannah"
];

let counter = 0;
for (let i = 0; i < names.length; i++) {
    console.log(i + ": " + names[i]);

    if (names[i] == "Bob") {
        counter++;
    }
}
console.log(counter);

