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

// let anAge = 30

// if (anAge > 20) {
// 	let isOld = true;
// }

// console.log(isOld);

const adding = (a: number, b: number = 7.3): number => a + b;

console.log(adding(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(adding(5, 2));

printOutput(adding(20));

printOutput('hey baba re bop, faddah!');

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

const thePerson: Person = {
	firstName: 'Faddah',
	age: 63
};

const copiedPerson: Person = { ...thePerson };

console.log(copiedPerson);

// using spread operator for params in functions
const addAll = (...numbers: number[]): number => numbers.reduce((curResult: number, curValue: number): number => curResult + curValue, 0);

const addedNumbers = addAll(5, 10, 2, 3.7);

console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: aName, age: theAge } = thePerson;

console.log(aName, theAge, thePerson);




