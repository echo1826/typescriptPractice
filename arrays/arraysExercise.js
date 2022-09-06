// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var total = 0;
    // let totalForOf: number = 0;
    for (var i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    // for (let product of products) {
    //     totalForOf += product.price;
    // }
    return total;
    // return totalForOf;
}
