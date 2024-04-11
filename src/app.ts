const theName: string = 'Faddah';
// theName = 'Max'; // this will throw an error because theName is a const
console.log(theName);

let age: number = 63;

age = 29;
// var theResult;

function addUp(a: number, b: number) {
	let theResult;
	theResult = a + b;
	return theResult;
}

// console.log(theResult);

// if (age > 20) {
// 	let isOld = true;
// }

// console.log(isOld);

const adding = (a: number, b: number = 2): number => a + b;

console.log(adding(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(adding(5, 2));

printOutput(adding(20));

const myButton: HTMLButtonElement = document.querySelector('button')!;

if (myButton) {
	myButton.addEventListener('click', event => console.log(event));
}

const hobbies: string[] = ['Sports', 'Cooking'];
const activeHobbies: string[] = ['Hiking'];

activeHobbies.push(...hobbies);

interface Person {
	firstName: string;
	age: number;
}

const aPerson: Person = {
	firstName: 'Faddah',
	age: 63
};

const copiedPerson: Person = { ...aPerson };

console.log(copiedPerson);

// using spread operator for params in functions
const addAll = (...numbers: number[]): number => numbers.reduce((curResult: number, curValue: number): number => curResult + curValue, 0);

const addedNumbers = addAll(5, 10, 2, 3.7);

console.log(addedNumbers);



