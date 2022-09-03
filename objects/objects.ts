// declaring a function parameter as an object type
// syntax is to right the parameter name and where the data type is, write what the object looks like, with it's key-value pair being the key name and the value as the data type of the value
function printName(person: { first: string; last: string }): void {
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
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// return object type
function randomCoordinate(): { x: number; y: number } {
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
function doublePoint(point: { x: number; y: number }): {
    x: number;
    y: number;
} {
    return { x: point.x * 2, y: point.y * 2 };
}
// Can define something called a type alias to be used as a data type alias to notate what the object looks like
type Point = {
    x: number;
    y: number;
};
// Now you can use the data type reference of Point to define what the object will look like
function triplePoint(point: Point): Point {
    return { x: point.x * 3, y: point.y * 3 };
}
// type aliases can be used for primitives, not only objects
// however it's redundant because it's a primitive
// type MyNum = number;
// let age: MyNum = 123498

// Nested Objects
function describePerson(person: {
    name: string;
    age: number;
    parentNames: { mom: string; dad: string };
}) {
    return `Person: ${person.name},
    Age: ${person.age},
    parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
}
describePerson({
    name: "Jimmy",
    age: 10,
    parentNames: { mom: "Kim", dad: "Steve" },
});

// type aliases helps greatly for readability especially for nested objects
//* function caclulatePayout(song: {title: string, artist: string, numStreams: number, credits: {producer: string, writer: string}}) {}
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
};
function caclulatePayout(song: Song): number {
    return 0.0033 * song.numStreams;
}
function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
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

// optional properties
// question mark after the property name will make that property optional, meaning it can be there but it's also acceptable for an object to not have that property
type ThreePoint = {
    x: number;
    y: number;
    z?: number;
};
const myPoint: ThreePoint = {
    x: 1,
    y: 3,
    // z: 9
};

// readonly modifier
// can mark properties in an object as readonly and TS will give an error if we try to write to that property\
type User = {
    readonly id: number;
    username: string;
};
const user: User = {
    id: 123,
    username: "taco",
};
// This gives an error because id is a readonly property
// user.id = 1;

// intersection types
// intersect two different types
type Circle = {
    radius: number;
};
type Colorful = {
    color: string;
};
// declaring a new type that intersects two other types
// this is a direct intersection
type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = { radius: 1, color: "yellow" };

type Cat = {
    numLives: number;
};
type Dog = {
    breed: string;
};

// can also intersect multiple times as well as a new type made inline
type CatDog = Cat &
    Dog & {
        age: number;
    };
const catDogObj: CatDog = {
    numLives: 7,
    breed: "husky",
    age: 8
}