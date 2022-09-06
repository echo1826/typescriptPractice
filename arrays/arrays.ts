// This implicilty creates an array of type never
// this is also telling typescript to always be an empty array
const activeUsers: [] = [];
// activeUsers.push("ethan");

// in order to create arrays, you must specify the data types of the items, all items in the array must be of the same data type unlike javascript where items can be different types
const stringArray: string[] = [];
// alternate syntax
const alternateSyntax: Array<string> = [];

// implicit any type array
const anyArray = [];

type Point = {
    x: number;
    y: number;
};

const coords: Point[] = [];
coords.push({ x: 1, y: 3 });

// multidimensional Arrays
const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];