/*
Typescript feature 1 : Optional typing
Code can be annotated with variable types.

*/
var myName = "Abhinav";
function printName(name) {
    console.log(name);
}
printName("abhinav");
//People is an array of persons
var People = [];
//An object conforming to the interface above
var abhinav = {
    name: "Abhinav",
    age: 26,
    greeting: "Hi"
};
//Pushing into the array
People.push(abhinav);
var Test = /** @class */ (function () {
    function Test(name, initialPosition) {
        this.name = name;
        this.initialPosition = initialPosition;
    }
    return Test;
}());
var Test2 = /** @class */ (function () {
    function Test2(name, initialPosition) {
        this.name = name;
        this.initialPosition = initialPosition;
    }
    return Test2;
}());
var testObject = new Test("Abhinav", { x: 123, y: 123 });
var testObject2 = new Test2("Abhinav2", { x: 123, y: 11 });
console.log(testObject2);
