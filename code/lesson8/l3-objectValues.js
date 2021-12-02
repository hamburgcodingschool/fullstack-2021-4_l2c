let person1 = {
    name: "Joe",
    age: 2,
    address: {
        street: "My Street 123",
        city: "NY",
        country: "USA",
        planet: "Earth"
    }
}

let people = [
    {
        name: "Joe",
        age: 10,
        city: "London"
    }, 
    {
        name: "Hannah",
        age: 20,
        city: "Paris"
    },
    {
        name: "Max",
        age: 5,
        city: "Hamburg"
    },
    {
        name: "Phil",
        age: 51,
        city: "Lisbon"
    }, {
        name: "Josie",
        age: 30,
        city: "Madrid"
    }
];

console.log(people[2].city);

// Exercise
// I want to know the average of all ages
// the City of the oldest
// the Name of the youngest

let totalAges = 0;

let oldestPerson = people[0];
let youngestPerson = people[0];

for (let i = 0; i < people.length; i++) {
    totalAges += people[i].age;

    if (people[i].age > oldestPerson.age) {
        oldestPerson = people[i];
    }

    if (people[i].age < youngestPerson.age) {
        youngestPerson = people[i];
    }
}

const averageAge = totalAges / people.length;
console.log(`The average age is ${averageAge}`);
console.log(`The oldest person is from ${oldestPerson.city}`);
console.log(`The youngest person is named ${youngestPerson.name}`);