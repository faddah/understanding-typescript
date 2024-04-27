"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var theName = 'Faddah';
console.log(theName);
var age = 63;
age = 29;
function addUp(a, b) {
    var theResult;
    theResult = a + b;
    return theResult;
}
var adding = function (a, b) {
    if (b === void 0) { b = 7.3; }
    return a + b;
};
console.log(adding(2, 5));
var printOutput = function (output) { return console.log(output); };
printOutput(adding(5, 2));
printOutput(adding(20));
printOutput('hey baba re bop, faddah!');
var myButton = document.querySelector('button');
if (myButton) {
    myButton.addEventListener('click', function (event) { return console.log(event); });
}
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var aPerson = {
    firstName: 'Faddah',
    age: 63
};
var copiedPerson = __assign({}, aPerson);
console.log(copiedPerson);
var addAll = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) { return curResult + curValue; }, 0);
};
var addedNumbers = addAll(5, 10, 2, 3.7);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var aName = aPerson.firstName, theAge = aPerson.age;
console.log(aName, theAge, aPerson);
//# sourceMappingURL=modern-js-examples.js.map