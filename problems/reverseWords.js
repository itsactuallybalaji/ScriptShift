const sent = "Welcome to the world of JavaScript!";
let revString = "";
const words = sent.split(" ")
for(let i = words.length - 1; i >= 0; i--) {
    let word = words[i];
    for(let j = word.length - 1; j >= 0; j--) {
        revString += word[j];
    }
    revString += " ";
}
console.log(revString.trim()); // Output: !tpircSavaJ fo dlrow eht ot emocleW