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

function merge2<T, U>(objA: T extends Object, objB: U) {  // the `extends Object` part happened in later version of TS
	return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Faddah" }, { age: 63 });
// Can also Specify/Assign the Types of the Objects at runtime for Generics
const mergedObj3 = merge2<{ name: string, hobbies: string[] }, { age: number }>({ name: "Faddah", hobbies: ['Bread Baking'] }, { age: 63 });
console.log(mergedObj2.age);
console.log(mergedObj3.hobbies);




