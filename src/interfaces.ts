// const buttonClick = require('./button');
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();

// How to do Functions in TS as a Type
type AddFnType = (a: number, b: number) => number;
let add: AddFnType;
add = (n1: number, n2: number) => n1 + n2;
console.log(`AddFnType result: ${add(5, 2)}`);

// How to do Functions in TS as an Interface
interface AddFnInterface {
	(a: number, b: number): number;
}
let addEmUp: AddFnInterface;
addEmUp = (n1: number, n2: number) => n1 + n2;
console.log(`AddFnInterface result: ${addEmUp(6, 3)}`);


interface Named {
	readonly name?: string;
	outputName?: string;
}

interface Greetable extends Named { // You can extend interfaces from other interfaces, and even multiple interfaces
	// readonly name: string; // can set readonly on interfaces, but not public or private
	// Can also use readonly on Type's, but not public or private
	// age: number;
	greet?(phrase: string): void;
}

// The other way to do the above is interface Greetable, Named { ... }
// Classes can only inherit from one class, but interfaces can be implemented from multiple interfaces

class thePerson implements Greetable {
	name?: string;
	age = 63;

	constructor(n?: string) {
		if (n) this.name = n;
	}

	greet?(phrase: string) {
		if (this.name) {
			console.log(`${phrase} ${this.name} and my age is ${this.age}.`);
		} else {
			console.log('Hi!');
		}
	}
}

let user1: Greetable;

user1 = new thePerson('Faddah');
// user1.name = "the funky lozano";  // <= won't work 'cuz "name" is `readonly` in interface and has already been assigned.

user1 && user1.greet ? user1.greet('Hello there! I am') : null;

console.log(user1);

let user2: Greetable = new thePerson();
user2 && user2.greet ? user2.greet(`Yo! It'z yr boyeeeeee`) : null;
console.log(user2);


/*

So why not do it as... ??

type thePerson = {
	name: string;
	age: number;

	greet(phrase: string): void;
}

BECAUSE: Interfaces are better suited for defining the structure of objects, while types are better suited for defining custom types, like union types or tuple types.
Interface is better suited for just Objects and Classes, while Types can be used for Objects, Classes, Functions, Primitives, Unions, Intersections, and Tuple types.
The main reason for doing TS Interfaces on objects is that they can be implemented by classes, which is not possible with Types. Also Interfaces can be extended, while Types can't.
Further, Interfaces can be used to define the structure of an object, and then use that interface to type-check the object. This is not possible with Types.
You can also make sure that you enforce certain methods and properties are always part of Classes, like here, the greet method or the name proprety.

*/
