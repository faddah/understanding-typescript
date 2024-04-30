import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
var thePerson = (function () {
    function thePerson(n) {
        this.age = 63;
        this.name = n;
    }
    thePerson.prototype.greet = function (phrase) {
        console.log("".concat(phrase, "  ").concat(this.name));
    };
    return thePerson;
}());
var user1;
user1 = new thePerson('Faddah');
user1.greet('Hello there! I am:');
console.log(user1);
//# sourceMappingURL=app.js.map