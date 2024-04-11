"use strict";
const theName = 'Faddah';
console.log(theName);
let age = 63;
age = 29;
function addUp(a, b) {
    let theResult;
    theResult = a + b;
    return theResult;
}
const adding = (a, b = 2) => a + b;
console.log(adding(2, 5));
const printOutput = output => console.log(output);
printOutput(adding(5, 2));
printOutput(adding(20));
const myButton = document.querySelector('button');
if (myButton) {
    myButton.addEventListener('click', event => console.log(event));
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const aPerson = {
    firstName: 'Faddah',
    age: 63
};
const copiedPerson = { ...aPerson };
console.log(copiedPerson);
const addAll = (...numbers) => numbers.reduce((curResult, curValue) => curResult + curValue, 0);
const addedNumbers = addAll(5, 10, 2, 3.7);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map