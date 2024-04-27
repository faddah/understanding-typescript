"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'faddah';
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName, userInput);
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
var infiniteLoop = function () {
    while (true) {
        console.log('This is an infinite loop');
    }
};
function addNums(a, b) {
    if (a + b > 0)
        return a + b;
    return;
}
var theButton = document.querySelector('button');
function clickHandler(message) {
    console.log('theButton is Clicked! ' + message);
}
if (theButton) {
    theButton.addEventListener('click', clickHandler.bind(null, 'You\'re welcome!'));
}
;
generateError('An error occurred!', 500);
var errorResult = generateError('An error occurred!', 500);
console.log(errorResult);
//# sourceMappingURL=old-app.js.map