"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuff1 = [1, 2, 3, 4];
// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors = [
    { r: 23, g: 43, b: 13 },
    { h: 32, s: 123, l: 89 },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(people) {
    if (typeof people === "string") {
        console.log(`Hello, ${people}`);
    }
    else {
        for (let person of people) {
            console.log(`Hello ${person}`);
        }
    }
}
