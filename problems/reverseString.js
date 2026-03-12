const sent = "Welcome to the world of JavaScript!";
let revString = ""
const words = sent.split(" ")
console.log(words);
for(let i = words.length - 1; i >= 0; i--) {
    revString += words[i] + " "
}
console.log(revString.trim()); // Output: JavaScript! of world the to Welcome