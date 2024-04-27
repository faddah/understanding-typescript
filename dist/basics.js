"use strict";
console.log("it's TypeScript files time, bay-bee!");
var resultDiv = document.querySelector('#resultDiv');
function addition(n1, n2, showAnswer, phrase) {
    var addResult = n1 + n2;
    if (showAnswer) {
        console.log(phrase + addResult);
    }
    return addResult;
}
var number1 = 5;
var number2 = 2.8;
var printAnswer = true;
var resultPhrase = 'The result is: ';
addition(number1, number2, printAnswer, resultPhrase);
var answer = addition(number1, number2, printAnswer, resultPhrase);
resultDiv.innerHTML = "<h2>Result: ".concat(answer, "</h2>");
//# sourceMappingURL=basics.js.map