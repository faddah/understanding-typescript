import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
var add;
add = function (n1, n2) { return n1 + n2; };
console.log("AddFnType result: ".concat(add(5, 2)));
var addEmUp;
addEmUp = function (n1, n2) { return n1 + n2; };
console.log("AddFnInterface result: ".concat(addEmUp(6, 3)));
var thePerson = (function () {
    function thePerson(n) {
        this.age = 63;
        if (n)
            this.name = n;
    }
    thePerson.prototype.greet = function (phrase) {
        if (this.name) {
            console.log("".concat(phrase, " ").concat(this.name, " and my age is ").concat(this.age, "."));
        }
        else {
            console.log('Hi!');
        }
    };
    return thePerson;
}());
var user1;
user1 = new thePerson('Faddah');
user1 && user1.greet ? user1.greet('Hello there! I am') : null;
console.log(user1);
var user2 = new thePerson();
user2 && user2.greet ? user2.greet("Yo! It'z yr boyeeeeee") : null;
console.log(user2);
//# sourceMappingURL=interfaces.js.map