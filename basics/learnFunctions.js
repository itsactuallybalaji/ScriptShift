// how to declare a function in javascript
// 1. Simple Function Declaration
// function (Keyword) (Optional) function name () {
//     // function body
// }
// 2. Function with Parameters
// function (Keyword) (Optional) function name (parameter1, parameter2, ...) {
//     // function body
// }    
// 3. Function expression
// const functionName = function (parameter1, parameter2, ...) {
//     // function body 
// };
// 4. Arrow Function
// const functionName = (parameter1, parameter2, ...) => {
//     // function body 
// };
// 5. Anonymous Function
// setTimeout(function() {
//     console.log("This is an anonymous function");
// }, 1000);

//Simple Calculator Function
function add(){
    const num1 = 5; 
    const num2 = 10;
    const sum = num1 + num2;
    console.log("The sum is: " + sum);  
}   
function subtract(a,b){
    const difference = a - b;
    console.log("The difference is: " + difference);
}
let product = function(a,b){
    const result = a * b;
    console.log("The product is: " + result);
}
let divide = (a,b) => {
    if(b === 0){
        console.log("Cannot divide by zero");
        return;
    }
    const result = a / b;
    console.log("The quotient is: " + result);
}
// functions in JS can not be overloaded like in other programming languages, 
// if we declare a function with the same name it will overwrite the previous one.
add();
subtract(10, 5);
product(4, 5);
divide(20, 4);