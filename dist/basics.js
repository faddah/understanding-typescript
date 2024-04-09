"use strict";
console.log(`it's TypeScript files time, bay-bee!`);
const resultDiv = document.querySelector('#resultDiv');
function addition(n1, n2, showAnswer, phrase) {
    const addResult = n1 + n2;
    if (showAnswer) {
        console.log(phrase + addResult);
    }
    return addResult;
}
const number1 = 5;
const number2 = 2.8;
const printAnswer = true;
const resultPhrase = 'The result is: ';
addition(number1, number2, printAnswer, resultPhrase);
const answer = addition(number1, number2, printAnswer, resultPhrase);
resultDiv.innerHTML = `<h2>Result: ${answer}</h2>`;
//# sourceMappingURL=basics.js.map