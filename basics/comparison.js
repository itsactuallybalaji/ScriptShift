let mark1 = 35
let mark2 = 100
let mark3 = 60
let passMark = 35
// Simple if..else statement
if(mark1 >= passMark){
    console.log("Pass")
}else{
    console.log("Fail")
}
// multiple else if
if(mark2 > 35 && mark2 <= 60){
console.log("Average")
}else if(mark2 > 60 && mark2 <= 80 ){
    console.log("Second Class")
}else if(mark2 > 80 && mark2 <= 100){
    console.log("Destinction")
}else{
    console.log("Fail")
}
// using == & == compares only the value irrespective of data type
if(mark3 == "60"){
    console.log("Same");
}else{
    console.log("Not same");  
}
// using ===
if(mark3 === 60){
    console.log("Same");
}else{
    console.log("Not same");  
}
// === compares both value and data type
if(mark3 === "60"){
    console.log("Same");
}else{
    console.log("Not same");  
}