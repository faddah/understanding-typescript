/* In tsconfig.json, target: es6, and add `,"experimentalDecorators" true` line. */import { buttonClick } from "./button.js";
import test from "./test.js";
import InputFieldFunc from "./inputField.js";
buttonClick();
test();
InputFieldFunc();

// Add a decorator to a class - Decorators are a feature that allows you to add metadata to a class.
// Decorators are just functions that are prefixed with the `@` symbol, and are called with the class constructor.
// Decorators can be used to add properties to a class, or to modify the behavior of a class.
// Decorators run in JavaScript/TypeScript when your class is DEFINED, not when it is later instantiated.

function Logger(logString: string) {
	console.log('LOGGER FACTORY');
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY');
	return function <T extends { new(...args: any[]): { name: string } }>(orginalConstructor: T) {
		return class extends orginalConstructor {
			constructor(..._: any[]) {
				super();
				console.log('Rendering template...');
				const hookElem = document.getElementById(hookId)!;
				hookElem ? hookElem.innerHTML = template : console.log('No hook element found!');
				hookElem.querySelector('h2')!.textContent = `My anotherPerson Object's name is:\t${this.name}`;
			}
		}
	}
}

@Logger(`LOGGING - PERSON...`)
@WithTemplate('<h2>My Person Object</h2>', 'app')
class anotherPerson {
	name: string = 'Faddah';

	constructor() {
		console.log('Creating person object...');
	}
}

const person1 = new anotherPerson();
console.log(person1);

function PropertyLogger(target: any, propertyName: string | Symbol) {
	console.log('Property decorator!');
	console.log(target, propertyName);
}

function AccessorLogger(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator!');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

const MethodDecorator = (target: any, name: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
	console.log('Method decorator!');
	console.log(target);
	console.log(name);
	console.log(descriptor);
	return descriptor;
}

const ParameterDecorator = (target: any, methodName: string | Symbol, position: number) => {
	console.log('Parameter decorator!');
	console.log(target);
	console.log(methodName);
	console.log(position);
}

class Product {
	@PropertyLogger
	title: string;
	private _price: number;

	@AccessorLogger
	set price(val: number) {
		val > 0 ? this._price = val : console.log('Invalid price - should be positive!');
	}
	/* 
		get price() {
			return this._price;
		}
	 */
	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}
	@MethodDecorator
	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book Vol. 2', 29);

function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	};
	return adjDescriptor;
}

class Printer {
	message = 'This works!';

	@Autobind
	printMessage() {
		console.log(this.message);
	}
}

const printer = new Printer();

printer.printMessage();

const button = document.querySelector('.aButton')!;
// button.addEventListener('click', printer.printMessage.bind(printer)); // Before using Autobind decorator, this line will not work.
button.addEventListener('click', printer.printMessage); // After using Autobind decorator, this line will work.


// Validation with Decorators
interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[];
	};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
	};
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
	};
}

function Validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];
	if (!objValidatorConfig) {
		return true;
	}
	let isValid = true;
	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}
	return isValid;
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector('form')!;
console.log(courseForm);

courseForm.addEventListener('submit', event => {
	event.preventDefault();
	const titleElem = document.getElementById('title') as HTMLInputElement;
	const priceElem = document.getElementById('price') as HTMLInputElement;

	const title: string = titleElem.value;
	const price: number = +priceElem.value;

	const course: object = new Course(title, price);
	if (!Validate(course)) {
		alert('Invalid input, please try again!');
		return;
	}
	console.log(course);

	titleElem.value = '';
	priceElem.value = '';
});



