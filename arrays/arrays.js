"use strict";
// This implicilty creates an array of type never
// this is also telling typescript to always be an empty array
const activeUsers = [];
// activeUsers.push("ethan");
// in order to create arrays, you must specify the data types of the items, all items in the array must be of the same data type unlike javascript where items can be different types
const stringArray = [];
// alternate syntax
const alternateSyntax = [];
// implicit any type array
const anyArray = [];
const coords = [];
coords.push({ x: 1, y: 3 });
// multidimensional Arrays
const board = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];
