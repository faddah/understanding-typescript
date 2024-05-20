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
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let anotherPerson = class anotherPerson {
    constructor() {
        this.name = 'Faddah';
        console.log('Creating person object...');
    }
};
anotherPerson = __decorate([
    Logger(`LOGGING - PERSON...`)
], anotherPerson);
const person1 = new anotherPerson();
console.log(person1);
//# sourceMappingURL=app.js.map