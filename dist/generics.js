import { buttonClick } from "./button.js";
import test from "./test.js";
import InputFieldFunc from "./inputField.js";
buttonClick();
test();
InputFieldFunc();
const names = ['Faddah', 'Max'];
const moreNames = [];
names[0].split(' ');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
const promiseNum = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "Faddah" }, { age: 63 }));
const mergedObj = merge({ name: "Faddah" }, { age: 63 });
function merge2(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj2 = merge2({ name: "Faddah", hobbies: ['Star Trek Fan'] }, { age: 63 });
const mergedObj3 = merge2({ name: "Faddah", hobbies: ['Bread Baking'] }, { age: 63 });
console.log(mergedObj2);
console.log(mergedObj3);
console.log(mergedObj2.age);
console.log(mergedObj3.hobbies);
const mergedObj4 = merge2(mergedObj2, mergedObj3);
console.log(mergedObj4);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
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
    return `Value:\t${obj[key]}`;
}
console.log(etl({ name: 'Schlemmie' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Faddah');
textStorage.addItem('Max');
console.log(textStorage.getItems());
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(100);
numberStorage.addItem(1000);
console.log(numberStorage.getItems());
numberStorage.removeItem(100);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const myGoal = createCourseGoal('Learn TypeScript', 'Learn TypeScript and be a better developer', new Date(5 / 31 / 2024));
console.log(myGoal);
const namesArr = ['Faddah', 'Roz', 'Max'];
//# sourceMappingURL=generics.js.map