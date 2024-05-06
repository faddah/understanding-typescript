console.log(`it's advanced TS feature time, bay-bee!`);// const buttonClick = require('./button');
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();

const paragraph: HTMLParagraphElement | null = document.querySelector('p')!;
const paraById: HTMLElement | null = document.getElementById('message-output')!;
// TypeCasting — what's between the `<>` is forcing a TypeCasting
// Version 1
// const userInputElement: HTMLInputElement | null = <HTMLInputElement>document.getElementById('user-input')!;
// Version 2 - to not conflict with React.JS `<>` build tools
const userInputElement: HTMLInputElement | null = document.getElementById('user-input')! as HTMLInputElement;

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: "Faddah",
	privileges: ["create-server"],
	startDate: new Date(),
};

console.table(e1);

// You can do the same thing with Interfaces...

interface Admin2 {
	name: string;
	privileges: string[];
}

interface Employee2 {
	name: string;
	startDate: Date;
}

interface ElevatedEmployee2 extends Admin2, Employee2 { }

const e2: ElevatedEmployee2 = {
	name: "Faddah",
	privileges: ["super-admin"],
	startDate: new Date(),
};

console.table(e2);

type Combinable = string | number;
type Numeric = number | boolean;

// Intersection Type of Unions
type Universal = Combinable & Numeric;  // ☝️ It sees the Universal Type as a Number, as that is the only commonality between the two Types above.

let uni: Universal;

// Intersections of regular Types or Unions is an intersection, 
// but in Objects it is all combined of Types within the object.

// Type Guards

// Function OVerloads (overloading args)
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable): Combinable {
	return (typeof a === "string" || typeof b === "string") ? a.toString() + b.toString() : a + b;
}

const result = add(5, 3);
console.log(result);
const result2 = add('Faddah', ' Wolf'); // <= now this works with the split and without having to add `as string`, due to function overloads above 
console.log(result2.split(' '));

// Optional Chaining
const fetchedUserData = {
	id: "u1",
	name: "Faddah",
	job: { title: "CEO", description: "EatMeBumCo" }
};

console.log(`Job Title: ${fetchedUserData?.job?.title}`); // <= for use when you don't know if all data has been fetched back properly

// Nullish Coalescing — for when you just don't know if it's valid data coming back or not
// const theInput = null;
const theInput = '';
const storedData = theInput ?? 'DEFAULT' // In TypeScript, ?? is the Nullish Coalescing Operator, now will do `DEFAULT` only with NULL or Undefined, not other falsey vars
console.log(`The Input: ${storedData}`);



type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(`Name: ${emp.name}`);
	if ("privileges" in emp) console.log(`Privileges: ${emp.privileges}`);
	if ("startDate" in emp) console.log(`Start Date: ${emp.startDate}`);
}

const e3: UnknownEmployee = {
	name: "Faddah",
	privileges: ["super-admin"],
	startDate: new Date(),
};

printEmployeeInformation(e1);
printEmployeeInformation(e3);

// Discriminated Unions Examples
class Car {
	drive() {
		console.log("Driving...");
	}
}

class Truck {
	drive() {
		console.log("Driving a truck...");
	}

	loadCargo(amount: number) {
		console.log(`Loading cargo...${amount}`);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case "bird":
			speed = animal.flyingSpeed;
			break;
		case "horse":
			speed = animal.runningSpeed;
			break;
	}
	console.log(`The ${animal.type} is moving at a speed of ${speed} kph.`);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Type Casting - TypeScript no likey generic `HTMLElement` type, 
// 'cuz generic HTMLElement type doesn't know it has a `value`.
// So, we need to force TypeScript to do it.
// now employed with a truthy check

if (userInputElement) userInputElement.value = "Hi there!";

const outputInput = () => {
	userInputElement.addEventListener('keyup', (event: KeyboardEvent) => {
		// event.preventDefault();
		userInputElement.value ? paragraph.textContent = userInputElement.value : paragraph.textContent = ""
	});
};
outputInput();

// Index Properties and Types
interface ErrorContainer {
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: "Not a valid email!",
	username: "Must start with a capital character!",
};



