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
// theName = 'Max'; // this will throw an error because theName is a const
console.log(theName);
var age = 63;
age = 29;
// var theResult;
function addUp(a, b) {
    var theResult;
    theResult = a + b;
    return theResult;
}
// console.log(theResult);
// if (age > 20) {
// 	let isOld = true;
// }
// console.log(isOld);
var adding = function (a, b) {
    if (b === void 0) { b = 2; }
    return a + b;
};
console.log(adding(2, 5));
var printOutput = function (output) { return console.log(output); };
printOutput(adding(5, 2));
printOutput(adding(5));
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
