// 1. global scope
// 2. block scope
// 3. function scope

// Global scope
// global scope variable is accessible from anywhere in the code
const x = 5; // global scope

console.log(x);

if (true) {
    console.log(x); // global scope
}

function show() {
    console.log(x);
}

show(); // global scope
/*


*/
// Block scope
// block scope variable is only accessible within the block
const y = 7; // global scope
if (true) {
    const y = 10; // block scope
    console.log(y);
}
console.log(y);
/*


*/
// Function scope
// function scope variable is only accessible within the function
// var, let, const
function showNum () {
    var num1 = 10; // function scope
    let num2 = 15; // function scope
    const num3 = 20; // function scope
    // console.log(z);
}
showNum();
console.log(num1); // ReferenceError: num1 is not defined