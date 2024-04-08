"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'faddah';
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName, userInput);
}
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
const infiniteLoop = () => {
    while (true) {
        console.log('This is an infinite loop');
    }
};
const theButton = document.querySelector('button');
theButton.addEventListener('click', () => {
    console.log('Button clicked!');
});
generateError('An error occurred!', 500);
const errorResult = generateError('An error occurred!', 500);
console.log(errorResult);
