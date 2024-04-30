// const buttonClick = require('./button');
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();

interface Greetable {
	readonly name: string; // can set readonly on interfaces, but not public or private
	// Can also use readonly on Type's, but not public or private
	// age: number;

	greet(phrase: string): void;
}

class thePerson implements Greetable {
	name: string;
	age = 63;

	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(`${phrase}  ${this.name}`);
	}
}

let user1: Greetable;

user1 = new thePerson('Faddah');

user1.greet('Hello there! I am:');

console.log(user1);


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
