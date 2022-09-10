// tuples are a special type exclusive to typescript
// tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays
var myTuple;
// can assign it values per its specs
myTuple = [10, "Typescript is fun"];
var goodRes = [200, "OK"];
var badRes = [500, "Internal Server Error"];
// still checks tuple structure to make valid reassignments
// goodRes[0] = "200";
// once a tuple is made, good practice to not adjust it's structure after it's been declared. once tuple has been made typescript treats the tuple as a regular array
goodRes.push(123);
goodRes.pop();
goodRes.pop();
// can have an array of tuples, not to be confused with 2 dimensional arrays
var responses = [
    [404, "Not Found"],
    [200, "OK"],
];
// enums allow us to define a set of named constants, we can give these constants numeric or string values
// numeric enums
var Responses;
(function (Responses) {
    Responses[(Responses["no"] = 0)] = "no";
    Responses[(Responses["yes"] = 1)] = "yes";
    Responses[(Responses["maybe"] = 2)] = "maybe";
})(Responses || (Responses = {}));
// if(status === no) {
//     // do something when the status == no, in other words, status === 0
// }
// defaults to 0, 1, 2 but can override it to a different constant value
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[(OrderStatus["PENDING"] = 0)] = "PENDING";
    OrderStatus[(OrderStatus["SHIPPED"] = 23)] = "SHIPPED";
    OrderStatus[(OrderStatus["DELIVERED"] = 24)] = "DELIVERED";
    OrderStatus[(OrderStatus["RETURNED"] = 25)] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
// assigning a variable to an enum value
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.PENDING);
// subsequent values gets assigned based on the first one
var Values;
(function (Values) {
    Values[(Values["hey"] = 10)] = "hey";
    Values[(Values["hello"] = 11)] = "hello";
    Values[(Values["bye"] = 12)] = "bye"; // 12
})(Values || (Values = {}));
// string enums
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
