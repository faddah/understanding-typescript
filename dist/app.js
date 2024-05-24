var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { buttonClick } from "./button.js";
import test from "./test.js";
import InputFieldFunc from "./inputField.js";
buttonClick();
test();
InputFieldFunc();
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (orginalConstructor) {
        return class extends orginalConstructor {
            constructor(..._) {
                super();
                console.log('Rendering template...');
                const hookElem = document.getElementById(hookId);
                hookElem ? hookElem.innerHTML = template : console.log('No hook element found!');
                hookElem.querySelector('h2').textContent = `My anotherPerson Object's name is:\t${this.name}`;
            }
        };
    };
}
let anotherPerson = class anotherPerson {
    constructor() {
        this.name = 'Faddah';
        console.log('Creating person object...');
    }
};
anotherPerson = __decorate([
    Logger(`LOGGING - PERSON...`),
    WithTemplate('<h2>My Person Object</h2>', 'app')
], anotherPerson);
const person1 = new anotherPerson();
console.log(person1);
function PropertyLogger(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function AccessorLogger(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
const MethodDecorator = (target, name, descriptor) => {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    return descriptor;
};
const ParameterDecorator = (target, methodName, position) => {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(methodName);
    console.log(position);
};
class Product {
    set price(val) {
        val > 0 ? this._price = val : console.log('Invalid price - should be positive!');
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    PropertyLogger
], Product.prototype, "title", void 0);
__decorate([
    AccessorLogger
], Product.prototype, "price", null);
__decorate([
    MethodDecorator
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Book', 19);
const p2 = new Product('Book Vol. 2', 29);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
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
    constructor() {
        this.message = 'This works!';
    }
    printMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "printMessage", null);
const printer = new Printer();
printer.printMessage();
const button = document.querySelector('.aButton');
button.addEventListener('click', printer.printMessage);
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}
function Validate(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
console.log(courseForm);
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleElem = document.getElementById('title');
    const priceElem = document.getElementById('price');
    const title = titleElem.value;
    const price = +priceElem.value;
    const course = new Course(title, price);
    if (!Validate(course)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(course);
    titleElem.value = '';
    priceElem.value = '';
});
//# sourceMappingURL=app.js.map