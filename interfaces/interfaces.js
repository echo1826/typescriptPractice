"use strict";
const pt = { x: 123, y: 456 };
const ethan = {
    id: 1235,
    first: "Ethan",
    last: "Cho",
    nickname: "Echo",
    sayHi() {
        return "Hello";
    },
};
const shoes = {
    name: "Blue Shoes",
    price: 100,
    applyDiscount(discount) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    },
};
// at this point in the program the interface Dog expects any dog object to include a breed property and a bark method so this will error out even though the Dog interface was declared initially with name and age properties only
// const elton: Dog = {
//     name: "Elton",
//     age: .5
// }
const elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "woof";
    },
};
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Labrador",
    bark() {
        return "bark";
    },
    job: "guide dog",
};
const myEngineer = {
    id: 123,
    name: "engineer",
    email: "engineer@me.com",
    level: "senior",
    languages: ["javascript", "python", "java"]
};
