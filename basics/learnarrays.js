const fruits = ['apple', 'banana', 'cherry'];
// for of = foreach
for(const eachFruit of fruits) {
console.log(eachFruit);

}
// In brings the index of the array, not the value
for(const eachFruit in fruits) {
console.log(eachFruit, fruits[eachFruit]);
}

// using in objects
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for(const key in person) {
    console.log(key, person[key]);
}