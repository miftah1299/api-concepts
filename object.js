// spread operator and object destructuring
// object destructuring is used to extract the values from the object and assign it to the variables
const myInfo = {
    name: "siri",
    age: 30,
    city: "Toronto",
    contact: {
        email: "xyz@gmail.com",
        phone: "123456",
    },
};

// spread operator
// used to copy the object. it will not copy the reference

const obj = { ...myInfo };
obj.name = "alexa";
obj.gender = "female";
// console.log(myInfo);
// console.log(obj);
/*


*/
// object destructuring
// do not need to maintain the order
// key should be same as the object key

const { age, name, city } = myInfo;
console.log(name, age, city);

// if we want to rename the key, we can use alias
const { email: userEmail, phone } = myInfo.contact;
console.log(userEmail, phone);

console.log("-----------------");
/*




*/
// object access: dot notation and bracket notation
// dot notation: object.key
// bracket notation: object[key]

const person = {
    name: "lisa",
    age: 25,
    city: "NY",
    phone: "678910",
};

// bracket notation
const key = "name";
// console.log(person[key]);

// bracket notation
// used when typeof key is string
// for in loop
for (let key in person) {
    // console.log(typeof key);
    // console.log(person.key); // undefined
    console.log(person[key]);
}
