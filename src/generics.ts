import { buttonClick } from "./button.js";
import test from "./test.js";
import InputFieldFunc from "./inputField.js";
buttonClick();
test();
InputFieldFunc();

// The <string> is a type annotation on a Geneeric TS Type Array.
const names: Array<string> = ['Faddah', 'Max'];
const moreNames: Array<string> = [];
names[0].split(' ');  // <= No complaints from TSC as it now knows it's an Array of Strings
// You can also do —
// const moreNames: string[] = [];
// const moreNames: Array<string> = [];
// const moreNames: Array<string | number> = [];  // for a TS Union
// const moreNames: Array<any> = [];

// How to do the same withe a JS/TS Promise
const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done!');
	}, 2000);
});

// If we had made it `Promise<any>`, then we could not do the following —
promise.then(data => {
	data.split(' ');  // <= TS will complain if this was Promise<any> as it has no idea if you're returning strings, and Array of strings, etc. 
});

// However, if we make the Promise resolve a Number
const promiseNum: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(100);
	}, 2000);
});

// promiseNum.then(data => {
// 	data.split(' ');  // <= TS will complain because you can't do the `split()` method on a number, only on strings or Arrays
// });  // better type safety than using `any`!

// You can also use Generics with Funcions

function merge(objA: object, objB: object) {
	return Object.assign(objA, objB);
}

console.log(merge({ name: "Faddah" }, { age: 63 }));

const mergedObj = merge({ name: "Faddah" }, { age: 63 }); // Can fix by adding `as { name: string, age: number }`, but that is cumbersome
// console.log(mergedObj.name);  // <= TS will complain if you try to access as it just knows it's an Object, but not of the keys/properties inside it.

function merge2<T extends object | null, U extends object>(objA: T, objB: U) {  // the `extends Object` part happened in later version of TS
	return Object.assign({}, objA, objB);
}

const mergedObj2 = merge2({ name: "Faddah", hobbies: ['Star Trek Fan'] }, { age: 63 });
// Can also Specify/Assign the Types of the Objects at runtime for Generics
const mergedObj3 = merge2<{ name: string, hobbies: string[] }, { age: number }>({ name: "Faddah", hobbies: ['Bread Baking'] }, { age: 63 });
console.log(mergedObj2);
console.log(mergedObj3);

console.log(mergedObj2.age);
console.log(mergedObj3.hobbies);

const mergedObj4 = merge2(mergedObj2, mergedObj3);
console.log(mergedObj4);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {	// <= this is a Generic Type Constraint
	let descriptionText = 'Got no value.';
	switch (element.length) {
		case 0:
			descriptionText = 'Got no value.';
			break;
		case 1:
			descriptionText = 'Got 1 element.';
			break;
		default:
			descriptionText = 'Got ' + element.length + ' elements.';
	}
	return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(''));
console.log(countAndDescribe(['Cooking', 'Baking', 'Star Trek']));

function etl<T extends object, U extends keyof T>(obj: T, key: U) {
	return `Value:\t${obj[key]}`;
}
console.log(etl({ name: 'Schlemmie' }, 'name'));

class DataStorage<T extends string | number | boolean> {   // <= this is a Generic Type Constraint, you declare the type of data you want to store at the instantiation of the class and then it will be locked as that used throughout the class
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(true); // <= TS will complain as we've made this iteration of DataStorage a string only
textStorage.addItem('Faddah');
textStorage.addItem('Max');
console.log(textStorage.getItems());
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(100);
numberStorage.addItem(1000);
console.log(numberStorage.getItems());
numberStorage.removeItem(100);
console.log(numberStorage.getItems());

/* 
const objStorage = new DataStorage<object>();
const maxObj = { name: 'Max' };
objStorage.addItem({ name: 'Faddah' });
objStorage.addItem(maxObj);
console.log(objStorage.getItems());
objStorage.removeItem(maxObj);
console.log(objStorage.getItems());
 */

// Built-in Generic Utility Types

// Partial type
interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {}; // <= Partial is a Generic Utility Type, it makes all properties optional (as in `?`	optional)
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

const myGoal: CourseGoal = createCourseGoal('Learn TypeScript', 'Learn TypeScript and be a better developer', new Date(5 / 31 / 2024));
console.log(myGoal);

// Readonly type
const namesArr: Readonly<string[]> = ['Faddah', 'Roz', 'Max'];
// namesArr.push('Momma'); // <= TS will complain as it's a Readonly type
// namesArr.pop(); // <= TS will complain as it's a Readonly type

// Generic Types vs Union Types
// Generics are used when you want to be flexible with the types you're working with, while Union Types are used when you want to be specific about the types you're working with.
