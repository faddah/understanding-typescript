import { buttonClick } from "./button.js";
import test from "./test.js";
import InputFieldFunc from "./inputField.js";
buttonClick();
test();
InputFieldFunc();
var names = ['Faddah', 'Max'];
var moreNames = [];
names[0].split(' ');
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 2000);
});
promise.then(function (data) {
    data.split(' ');
});
var promiseNum = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(100);
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "Faddah" }, { age: 63 }));
var mergedObj = merge({ name: "Faddah" }, { age: 63 });
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj2 = merge2({ name: "Faddah" }, { age: 63 });
var mergedObj3 = merge2({ name: "Faddah", hobbies: ['Bread Baking'] }, { age: 63 });
console.log(mergedObj2.age);
console.log(mergedObj3.hobbies);
//# sourceMappingURL=app.js.map