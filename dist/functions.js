"use strict";
const addIt = (n1, n2) => n1 + n2;
const printResult = (num) => console.log(`Result: ${num}`);
const printWebResult = (num) => `Result: ${num}`;
printResult(addIt(5, 12));
let combineValues;
combineValues = addIt;
console.log(combineValues(8, 8));
const divResult = document.querySelector('#resultDiv');
const h1Elm = document.createElement('h1');
const h2Elm = document.createElement('h2');
const h3Elm = document.createElement('h3');
h1Elm.textContent = printWebResult(addIt(5, 12));
h2Elm.textContent = combineValues(8, 8).toString();
divResult.append(h1Elm);
divResult.append(h2Elm);
const addAndHandle = (n1, n2, cb) => cb(n1 + n2);
addAndHandle(10, 20, (result) => console.log(result));
h3Elm.textContent = addAndHandle(10, 20, (result) => result.toString()).toString();
divResult.append(h3Elm);
