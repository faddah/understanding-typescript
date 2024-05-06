console.log(`it's advanced TS feature time, bay-bee!`);// const buttonClick = require('./button');
import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();

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

function add(a: Combinable, b: Combinable) {
	return (typeof a === "string" || typeof b === "string") ? a.toString() + b.toString() : a + b;
}

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
		console.log(`Loading cargo... ${amount}`);
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