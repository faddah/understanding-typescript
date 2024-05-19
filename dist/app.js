var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    return Object.assign({}, objA, objB);
}
var mergedObj2 = merge2({ name: "Faddah", hobbies: ['Star Trek Fan'] }, { age: 63 });
var mergedObj3 = merge2({ name: "Faddah", hobbies: ['Bread Baking'] }, { age: 63 });
console.log(mergedObj2);
console.log(mergedObj3);
console.log(mergedObj2.age);
console.log(mergedObj3.hobbies);
var mergedObj4 = merge2(mergedObj2, mergedObj3);
console.log(mergedObj4);
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    switch (element.length) {
        case 0:
            descriptionText = 'Got no value.';
            break;
        case 1:
            descriptionText = 'Got 1 element.';
            break;
        default:
            descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(''));
console.log(countAndDescribe(['Cooking', 'Baking', 'Star Trek']));
function etl(obj, key) {
    return "Value:\t".concat(obj[key]);
}
console.log(etl({ name: 'Schlemmie' }, 'name'));
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Faddah');
textStorage.addItem('Max');
console.log(textStorage.getItems());
textStorage.removeItem('Max');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(100);
numberStorage.addItem(1000);
console.log(numberStorage.getItems());
numberStorage.removeItem(100);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var myGoal = createCourseGoal('Learn TypeScript', 'Learn TypeScript and be a better developer', new Date(5 / 31 / 2024));
console.log(myGoal);
var namesArr = ['Faddah', 'Roz', 'Max'];
//# sourceMappingURL=app.js.map