/*
Typescript feature 1 : Optional typing
Code can be annotated with variable types for type checking during compilation

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName = "Abhinav";
var myNumber = 123; //Types can be multiple too
/*
Type Object is more restrictive than any. For example:

let a: any;
let b: Object;

a.nomethod(); // Transpiles just fine
b.nomethod(); // Error: Property 'nomethod' does not exist on type 'Object'.
The Object class does not have a nomethod() function, therefore the transpiler will generate an error telling you exactly that. If you use any instead you are basically telling the transpiler that anything goes, you are providing no information about what is stored in a - it can be anything! And therefore the transpiler will allow you to do whatever you want with something defined as any.

So in short

any can be anything (you can call any method etc on it without compilation errors)
Object exposes the functions and properties defined in the Object class.

*/
var myTest = "I am a string"; // Type any (can be anything)
var test = "test"; //Implicit typing ( automatically assumed to be string)
//To cast a type as a different type
var strLength = myTest.length;
//or 
var strLength2 = myTest.length;
//Array with types
var strArray = ["Hello world"];
var strOrNumArray = ["Hello world", 123, "abc"];
var twoDimArray = [[true, false]];
//Tuples 
var exTuple = ["abc", 1];
console.log("raju" /* raju */);
//Return type of Age enum
function totalAge(age, age2) {
    return age + age2;
}
//Never returns( throws an error)
function neverExample() {
    throw Error;
}
//Parameter checking in functions ,return type of void
function printName(name, myNumber) {
    console.log(name, myNumber);
}
printName(myName, myNumber);
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
/*

Shorthand for writing
classes.
*/
var Test2 = /** @class */ (function () {
    function Test2(name, initialPosition) {
        this.name = name;
        this.initialPosition = initialPosition;
    }
    return Test2;
}());
var testObject = new Test("Abhinav", { x: 123, y: 123 });
var testObject2 = new Test2("Abhinav2", { x: 123, y: 11 });
// To check types and models
if (testObject2 instanceof Test2) {
    //log here
}
console.log(testObject2);
/* Barrels => Exporting files from one file
  eg,
  instead of,
  a.ts
  import abc from "./abc.ts"
  import xyz from "./xyz.ts"
  import lmn from "./lmn.ts"

  b.ts
  export * from "./abc.ts"
  export * from "./xyz.ts"
  export * from "./lmn.ts"

  a.ts will now be:
  import {abc,xyz,lmn} from b.ts
*/
/* Class with optional arguments */
var Insaan = /** @class */ (function () {
    //Optional argument , with datatype of any
    function Insaan(data) {
        //Assigning default values
        this.firstName = data.firstName || "Abhinav";
        this.middleName = data.middleName || "abc";
        this.lastName = data.lastName || "mishra";
    }
    return Insaan;
}());
//Rest of arguments not required.
var insaan1 = new Insaan({ firstName: "abhinav" });
// let manBearPig2: ManBearPig = {firstName:"Abhinav",age:25}
/* Generics
Useful for multiple data types/ Not knowing what data type
is needed to be passed.
*/
//Generic type accepted and returned
function example(arg) {
    return arg;
}
example([4]);
/*
Access modifiers are features of ts that allow
manipulation of class  properties selectively.

*/
var Animal = /** @class */ (function () {
    function Animal(data) {
        this.type = data.type;
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear(data) {
        var _this = _super.call(this, data) || this;
        _this.claws = data.claws;
        _this.name = data.name;
        _this.tail = data.tail;
        return _this;
    }
    Bear.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Bear.prototype.addTwo = function (num1, num2) {
        return num1 + num2;
    };
    return Bear;
}(Animal));
var bear = new Bear({ name: "Omega", tail: true });
bear.claws = 3;
//Readonly, cant reset value bear.name ="test"
//Private property , only accessible to bear class
//Cant set bear.tail=false
//Hiding private function logic
bear.add(1, 2);
