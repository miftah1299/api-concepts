// Code to demonstrate forEach method in JavaScript

// forEach method is used to iterate over the elements of an array
// forEach method takes a callback function as an argument
// The callback function takes 3 arguments: element, index, array

// array
const arr = [23, 45, 67, 89, 90];

// forEach method
// function show (a) {
//     console.log(a);
// }

// arrow function
// const show = (a) => {
//     console.log(a);
// };

arr.forEach((a) => {
    console.log(a);
});
// forEach method is used to iterate over the elements of an array
// forEach does not return anything

let sum = 0;
arr.forEach((a) => {
    sum += a;
});
console.log("sum:", sum);
console.log();

console.log("forEach with index:");
// element, index, array
arr.forEach((element, index, array) => {
    console.log("element:", element);
    console.log("index:", index);
    // console.log("array:", array);
});