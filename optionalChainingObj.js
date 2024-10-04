//
// Optional chaining is a newer syntax that allows you to access
// deeply nested object properties without worrying if the property exists or not.

const petOwner = {
    name: "peter",
    contact: {
        email: "peter@gmail.com",
        phone: "123456",
    },
    pet: {
        name: "lucy",
        type: "cat",
        info: {
            color: "brown",
            weight: "1.5kg",
        },
    },
    food: ["meat", "fish"],
};

console.log(petOwner.pet.info.color);
// optional chaining
console.log(petOwner?.pet?.info?.color);

// undefined is not an error
console.log("find that is not exist in the object:");
console.log(petOwner.address); // undefined
// console.log(petOwner.address.road); // type error
console.log(petOwner?.address?.road); // undefined

console.log(petOwner?.food[2]); // undefined
