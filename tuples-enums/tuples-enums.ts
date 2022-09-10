// tuples are a special type exclusive to typescript
// tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays
let myTuple: [number, string];
// can assign it values per its specs
myTuple = [10, "Typescript is fun"];

// can't assign it values of a different structure
// myTuple = ['Typescript is fun', 10]

// const color: [number, number, number] = [255, 0, 255];

type HttpResponse = [number, string];

const goodRes: HttpResponse = [200, "OK"];
const badRes: HttpResponse = [500, "Internal Server Error"];

// still checks tuple structure to make valid reassignments
// goodRes[0] = "200";

// once a tuple is made, good practice to not adjust it's structure after it's been declared. once tuple has been made typescript treats the tuple as a regular array
goodRes.push(123);
goodRes.pop();
goodRes.pop();

// can have an array of tuples, not to be confused with 2 dimensional arrays
const responses: HttpResponse[] = [
    [404, "Not Found"],
    [200, "OK"],
];

// enums allow us to define a set of named constants, we can give these constants numeric or string values
// numeric enums
enum Responses {
    no, // no gets assigned the value of 1, and is pre-determined to be 0
    yes, // 2 yes gets predetermined to the value of 1
    maybe, // 3 maybe gets predetermined to the value of 2
}

// if(status === no) {
//     // do something when the status == no, in other words, status === 0
// }

// defaults to 0, 1, 2 but can override it to a different constant value
enum OrderStatus {
    PENDING,
    SHIPPED = 23,
    DELIVERED, // 24
    RETURNED, // 25
}

// assigning a variable to an enum value
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.PENDING);

// subsequent values gets assigned based on the first one
enum Values {
    hey = 10,
    hello, // 11
    bye // 12
}

// string enums
enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

// enums are compiled into:
/*
(function (OrderStatus) {
    OrderStatus[(OrderStatus["PENDING"] = 0)] = "PENDING";
    OrderStatus[(OrderStatus["SHIPPED"] = 23)] = "SHIPPED";
    OrderStatus[(OrderStatus["DELIVERED"] = 24)] = "DELIVERED";
    OrderStatus[(OrderStatus["RETURNED"] = 25)] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));

this is how javascript interprets objects
*/