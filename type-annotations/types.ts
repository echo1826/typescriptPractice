// typescript variable breakdown
// variable declaration keyword (let, const, var)    name of variable  : datatype of variable   =   value of variable
const stringVariable: string = "This is a const string variable!";

//! cannot reassign a variable to a different type it was declared with!
// stringVariable = true;

// Primitives
let someString: string = "String";
let someNumber: number = 1;
let someBoolean: boolean = true;
let nothing: null = null;
let foo: undefined = undefined;

// you can also leave off the type and let typescript handle type declaration, same rules apply where the variable can only be changed to the same datatype as it's initial declaration
let anotherString = "this is also a string!";
//! TS will view this as an error
// anotherString = false;

// there is an any type that tells TS to not check it's type, variables will follow the same rules as JS
let anyType: any = "string first";
//! all of this will not cause TS errors
// anyType = 9;
// anyType = false;
// anyType();

// Main reason why you declare the type is to delay the variable initialization
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
// This gives the variable an implicit any type
// let foundMovie;
// You can also set the variable type and initialize at a later point
let foundMovie: string;





foundMovie = movies[1];