/* 
Typescript feature 1 : Optional typing
Code can be annotated with variable types for type checking during compilation

*/

let myName:string = "Abhinav";
let myNumber:string | number = 123 //Types can be multiple too


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
let myTest:any ="I am a string" // Type any (can be anything)
let test = "test" //Implicit typing ( automatically assumed to be string)

//To cast a type as a different type
let strLength = (myTest as string).length;
//or 
let strLength2 = (<string> myTest).length

//Array with types

const strArray: string[] = ["Hello world"]

const strOrNumArray:(string | number)[] = ["Hello world",123,"abc"]

const twoDimArray: boolean[][] =[[true,false]]

//Tuples 
const exTuple:[string,number] =["abc",1]

//Enums
const enum Age {
  abhinav= 26,
  raju=11
}

const enum Name {
  abhinav = 'abhinav',
  raju ='raju'
}

console.log(Name.raju)

//Return type of Age enum
function totalAge(age:Age,age2:Age):Age {
  return age + age2
}

//Never returns( throws an error)
function neverExample():never {
  throw Error;
}


//Parameter checking in functions ,return type of void
function printName(name: string,myNumber:string | number):void {
  console.log(name , myNumber);
}

printName(myName,myNumber);

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

// To check types and models

if(testObject2 instanceof Test2) {
  //log here
}

console.log(testObject2)

/* Explicitly creating types */
//Local type can be only used in this file , unlike interfaces.
type individual = {firstName:string,lastName:string}

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
class Insaan {
  firstName:string;
  middleName:string;
  lastName:string;

//Optional argument , with datatype of any
  constructor(data?: any) {
  //Assigning default values
  this.firstName =data.firstName || "Abhinav";
  this.middleName = data.middleName || "abc";
  this.lastName = data.lastName || "mishra";
  }
}

//Rest of arguments not required.
const insaan1: Insaan = new Insaan({firstName:"abhinav"})


/* Intersection types */

// let manBearPig: Insaan & Age & Person = {firstName:"Abhinav",age:24}

type ManBearPig  = Insaan & Age & Person

// let manBearPig2: ManBearPig = {firstName:"Abhinav",age:25}

/* Generics
Useful for multiple data types/ Not knowing what data type
is needed to be passed.
*/

//Generic type accepted and returned
function example<T>(arg:T[]):T[] {
  return arg
}

example([4])

/* 
Access modifiers are features of ts that allow
manipulation of class  properties selectively.

*/

class Animal {
  //Making it protected so it cant be inherited 
  //Properties are public by default
  protected type:string;

  protected constructor(data?:any) {
    this.type=data.type
  }
}

class Bear extends Animal {
  public claws:number;
  readonly name:string;
  private tail:boolean;

  constructor(data?:any) {
    super(data);
    this.claws = data.claws;
    this.name = data.name;
    this.tail =data.tail;
  }

  public add(num1,num2) {
    return num1 + num2
  }

  private addTwo(num1,num2 ) {
    return num1 + num2
  }
}

const bear = new Bear({name:"Omega",tail:true})
bear.claws = 3;
//Readonly, cant reset value bear.name ="test"

//Private property , only accessible to bear class
//Cant set bear.tail=false

//Hiding private function logic
bear.add(1,2)