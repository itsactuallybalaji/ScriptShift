// String literal
const myName = "Balaji Chandrasekaran";
console.log(myName); // Output: Balaji Chandrasekaran
// String Object
const myNameObject = new String("Balaji Chandrasekaran");
console.log(myNameObject); // Output: [String: 'Balaji Chandrasekaran']
// To Convert String into Uppercase
const upperCaseName = myName.toUpperCase();
console.log(upperCaseName); // Output: BALAJI CHANDRASEKARAN
// To Convert String into Lowercase
const lowerCaseName = myName.toLowerCase();
console.log(lowerCaseName); // Output: balaji chandrasekaran
// To Get the Length of the String
const nameLength = myName.length;
console.log(nameLength); // Output: 24
// To Get a Substring from the String
const subString = myName.substring(0, 6);
console.log(subString); // Output: Balaji
// To Split the String into an Array
const nameArray = myName.split(" ");
console.log(nameArray); // Output: [ 'Balaji', 'Chandrasekaran' ]
for (const eachName in nameArray) {
    console.log(nameArray[eachName]); // Output: Balaji, Chandrasekaran 
}
// To check if the String starts with a specific substring
const startsWithBalaji = myName.startsWith("Balaji");
console.log(startsWithBalaji); // Output: true
// To check if the String ends with a specific substring
const endswith = myName.endsWith("ran");
console.log(endswith); // Output: true

