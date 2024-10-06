// map method
// map method is used to iterate over the elements of an array
// map method takes a callback function as an argument
// The callback function takes 3 arguments: element, index, array

// map method returns a new array
// map method does not change the original array


const arr = [23, 45, 67, 89, 90];

// map method
// arr.map((item, index, array) => {
//     console.log(item, index, array);
// });

// const result = arr.map((item) => item * 2);

const result = arr.map((item) => {
    const x = item * 2; 
    return x; // return is mandatory
});
console.log(result);

console.log(arr);

