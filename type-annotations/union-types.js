"use strict";
// union types allow us to give a value a few different possible types, i.e. either a number or a string
// wouldn't use it on something that you would know the type at run time
// to declare a union type
let age = 21;
age = 23;
age = "23";
// there is no limits to amount of union types
let nameExample = "name";
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 213.345 };
function printAge(age) {
    console.log(`You are ${age} years old`);
}
printAge(23);
printAge("87");
// type narrowing
function calculateTax(price, tax) {
    // this causes an error because typescript doesn't know whether to do string operation or number operation
    // return price * tax;
    // price.replace("$", "");
    // typescript recognizes that we are dealing with the possible data type that price can be
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
// union types w/ arrays
// the parenthesis matters otherwise the union would be stuff could be either a number or string[]
const stuff = [
    1,
    2,
    3,
    4,
    "5",
    "array can hold both strings and numbers",
];
// const stuff: number[] | string[] is the same as saying stuff can only be an array with only numbers or an array with only strings
// literal types
// literally zero can only be type 0
let zero = 0;
// error
// zero = 2;
// literal + union
// answer is a union of literal types where answer can only be yes, no, or maybe
function giveAnswer(answer) {
    return `The answer is ${answer}`;
}
