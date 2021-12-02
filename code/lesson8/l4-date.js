// Unix Epoch
// miliseconds that have passed since 1970/01/01 00:00:00 UTC

const epoch = Date.now();
const dateString = Date();
const dateObject = new Date();

console.log(epoch);
console.log(dateString);
console.log(dateObject);

const someDate = new Date("1981-01-27 08:25:00");
console.log(someDate);