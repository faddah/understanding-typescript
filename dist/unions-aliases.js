"use strict";
function combine(input1, input2, resultConversion) {
    return typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'NUM'
        ? +input1 + +input2
        : input1.toString() + input2.toString();
}
const theDiv = document.querySelector('#resultDiv');
theDiv.innerHTML = `<h1>${combine(30, 26, 'NUM').toString()}</h1>`;
const combinedNamesElm = document.createElement('h2');
const combinedNamesElm2 = document.createElement('h2');
combinedNamesElm2.textContent = combine('30', '26', 'NUM');
combinedNamesElm.textContent = combine('Max ', 'Anna', 'STR');
theDiv.append(combinedNamesElm2);
theDiv.append(combinedNamesElm);
console.log(combine(30, 26, 'NUM'));
console.log(combine('30', '26', 'NUM'));
console.log(combine('Max ', 'Anna', 'STR'));
