// arrow function
// arrow function with no parameters
const info = () => "arrow function";
console.log(info());

// arrow function with a single parameter
const square = a => a * a;
console.log(square(6));

// arrow function with parameters
const sum = (a, b) => a + b;
console.log(sum(9, 10));
/*



*/
// arrow function with block
const multiply = (a, b) => {
    const result = a * b;
    return result;
}
console.log(multiply(5, 6));