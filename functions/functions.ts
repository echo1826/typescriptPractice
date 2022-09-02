// function parameters

//! This function parameter declaration gives the parameter an implicit type of any
function areaOfSquare(num) {
    return num * num;
}
//! This won't produce TS errors
// areaOfSquare("string");
// areaOfSquare(1);
// areaOfSquare(true)

// Declare the parameter with a type like this in order for the arguments to be checked by TS
function parameterTypeSquareArea(num: number) {
    return num * num;
}

parameterTypeSquareArea(1);
//! This will produce a TS error saying it must be a number
// parameterTypeSquareArea(false);

// default parameters
function defaultParams(person: string = "stranger") {
    return `Hi there, ${person}`;
}
defaultParams();
defaultParams("not default");

// function return types, just like variables
function returnNumberType(): number {
    let number: number = 9;
    return number;
}

// the void return type means the function returns nothing out of it
function returnNothing(): void {
    let number: number = 9;
    // ! this will cause a TS error saying you can't return a value out of this function
    // return number;
    //! this will not cause an error because you are not returning a value out of this function
    return;
}

// annonymous functions
// in this annonymous function, TS can read the array and determine the typing of the parameter without having to declare it explicitly, you can also explicitly say the data type of the parameter
// same rules applies to the return type of the annonymous function
const colors = ['red', 'green', 'blue'];
colors.map(color => {
    return color.toUpperCase();
});

// never return type
// never is used to indicate that the function never returns anything different from void in which even though the function doesn't "return data" it will still return undefined or null which technically still has a value
// more used to indicate the function will never finish executing, i.e. infinite loop in the function or throwing an error in the function
// the inferred data type from TS is void, but more technically correct is that this function is a never return type function which will cause TS errors if you try to return something
function makeError(msg: string): never {
    // this will error out because never states the function will never return in the function, or the function will not finish executing
    // return;
    throw new Error(msg);
}
