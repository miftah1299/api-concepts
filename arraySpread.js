//
// spread operator (...)
// used to copy, expand, merge arrays and objects

const arr1 = [1, 2, 3];
const arr2 = arr1;
// arr2 is a reference to arr1

const arr3 = [...arr1]; // spread operator
// arr3 is a copy of arr1

// changes to arr1 will affect arr2
// changes to arr2 will affect arr1
arr1.push(8);
console.log(arr2);

console.log(arr3);

arr3.push(10);
console.log(arr3);

/*


*/
// array distructuring
// used to unpack values from arrays, or properties from objects, into distinct variables

const names = ["John", "Jane", "Jack", "Jill"];
// using spread operator
const [name1, name2, ...rest] = names;
console.log(name1);
console.log(name2);
console.log(rest);
// use underscore to skip values
const [_, , , ...rest2] = names;
console.log(rest2);
