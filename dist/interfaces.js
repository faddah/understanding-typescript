import { buttonClick } from "./button.js";
import test from "./test.js";
buttonClick();
test();
let add;
add = (n1, n2) => n1 + n2;
console.log(`AddFnType result: ${add(5, 2)}`);
let addEmUp;
addEmUp = (n1, n2) => n1 + n2;
console.log(`AddFnInterface result: ${addEmUp(6, 3)}`);
class thePerson {
    constructor(n) {
        this.age = 63;
        if (n)
            this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name} and my age is ${this.age}.`);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new thePerson('Faddah');
user1 && user1.greet ? user1.greet('Hello there! I am') : null;
console.log(user1);
let user2 = new thePerson();
user2 && user2.greet ? user2.greet(`Yo! It'z yr boyeeeeee`) : null;
console.log(user2);
//# sourceMappingURL=interfaces.js.map