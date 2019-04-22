/* 
Typescript feature 1 : Optional typing
Code can be annotated with variable types.

*/

let myName:string = "Abhinav";

function printName(name: string) {
  console.log(name);
}

printName("abhinav");

/* 
Typescript feature 2 : Interfaces

Can be understood as the shape of an object literal.
(What the shape of a given data structure will be)
*/


// A person will have the following properties
interface Person {
  name: string,
  age: number,
  greeting: string
}

//People is an array of persons
let People: Person[] = [];

//An object conforming to the interface above
let abhinav:Person = {
  name:"Abhinav",
  age:26,
  greeting:"Hi"
}

//Pushing into the array
People.push(abhinav)


/*
Typescript feature 3:
ES6 classes with interface declarations.

*/

interface Point {
  x:number,
  y:number
}


class Test {
  name:string;
  initialPosition:Point
  constructor(name:string,initialPosition:Point) {
  this.name = name;
  this.initialPosition = initialPosition
  }
}

/* 

Shorthand for writing 
classes.
*/
class Test2 {
  constructor(private name:string,public initialPosition:Point){}
}

let testObject = new Test("Abhinav",{x:123,y:123})

let testObject2 = new Test2("Abhinav2",{x:123,y:11})

console.log(testObject2)
