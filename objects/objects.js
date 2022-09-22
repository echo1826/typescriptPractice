"use strict";
// declaring a function parameter as an object type
// syntax is to right the parameter name and where the data type is, write what the object looks like, with it's key-value pair being the key name and the value as the data type of the value
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
// this will error out because printName expects an object that looks like this
/* {
    first: "Ethan",
    last: "Cho"
}
*/
// printName({});
// position of the keys do not matter, only that they are there
printName({ last: "last is first", first: "first is last" });
// how to declare an object type in a variable
let coordinate = { x: 34, y: 2 };
// return object type
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// excess object properties
// TS will give an error saying there's an extra property in the object if we were to pass the object into the function as an object literal
// printName({first: "Mick", last: "Jagger", middle: "Excess"})
//! However passing the object into the function with an extra property like so will not cause a TS error
// TS will only check for required properties according to the function parameter definition and not check for excess properties like object literals
const singer = { first: "Name", last: "Last name", age: 123 };
printName(singer);
// Type alias
// Say we use the same type of object multiple times in different function parameters like the coordinate object {x: number, y: number}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
// Now you can use the data type reference of Point to define what the object will look like
function triplePoint(point) {
    return { x: point.x * 3, y: point.y * 3 };
}
// type aliases can be used for primitives, not only objects
// however it's redundant because it's a primitive
// type MyNum = number;
// let age: MyNum = 123498
// Nested Objects
function describePerson(person) {
    return `Person: ${person.name},
    Age: ${person.age},
    parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
}
describePerson({
    name: "Jimmy",
    age: 10,
    parentNames: { mom: "Kim", dad: "Steve" },
});
function caclulatePayout(song) {
    return 0.0033 * song.numStreams;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
caclulatePayout(mySong);
printSong(mySong);
const myPoint = {
    x: 1,
    y: 3,
    // z: 9
};
const user = {
    id: 123,
    username: "taco",
};
const happyFace = { radius: 1, color: "yellow" };
const catDogObj = {
    numLives: 7,
    breed: "husky",
    age: 8
};
