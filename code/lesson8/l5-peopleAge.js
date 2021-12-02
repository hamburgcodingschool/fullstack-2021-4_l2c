const person1 = {
    name: "Joe",
    birthday: new Date("2000-12-02 19:56"),
    city: "NEW YORK",
    age: function() {
        let diff = new Date() - this.birthday;
        let dateDiff = new Date(diff);
        return dateDiff.getUTCFullYear() - 1970;
    }
}

console.log(person1.age());

// Exercise
// print Joe's age in years

// let nowEpoc = Date.now();
// let joeEpoc = person1.birthday.getTime();

// let diff = nowEpoc - joeEpoc;

let diff = new Date() - person1.birthday;

// console.log(diff / (1000 * 60 * 60 * 24 * 365.25));

let dateDiff = new Date(diff);

console.log(dateDiff.getUTCFullYear() - 1970);

function howOld(birthdate) {
    let diff = new Date() - birthdate;
    let dateDiff = new Date(diff);
    return dateDiff.getUTCFullYear() - 1970;
}

console.log(howOld(person1.birthday));