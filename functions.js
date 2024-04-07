var addIt = function (n1, n2) { return n1 + n2; };
var printResult = function (num) { return console.log("Result: ".concat(num)); };
var printWebResult = function (num) { return "Result: ".concat(num); };
printResult(addIt(5, 12));
var combineValues;
combineValues = addIt;
// combineValues = 5	// this will throw an error because combineValues' Type is a function,
// not a number.
// combineValues = printResult // this will work because, though printResult is a Type of
// Function, it only has ONE arg, and it returns a number, not void like printResult
console.log(combineValues(8, 8));
var divResult = document.querySelector('#resultDiv');
var h1Elm = document.createElement('h1');
var h2Elm = document.createElement('h2');
var h3Elm = document.createElement('h3');
h1Elm.textContent = printWebResult(addIt(5, 12));
h2Elm.textContent = combineValues(8, 8).toString();
divResult.append(h1Elm);
divResult.append(h2Elm);
var addAndHandle = function (n1, n2, cb) { return cb(n1 + n2); };
addAndHandle(10, 20, function (result) { return console.log(result); });
// h3Elm.textContent = addAndHandle(10, 20, (result) => {
// 	result.toString()
// 	return result
// })
h3Elm.textContent = addAndHandle(10, 20, function (result) { return result.toString(); });
divResult.append(h3Elm);
// There's also the undefined type in TypeScript
// let userInput: undefined
// exmaple of a function that returns undefined - you just need to specify it has a return
// type of undefined, like a return with nothing after it, as in below —
// const printResult3 = (num: number): undefined => {
// 	console.log(`Result: ${num}`)
// 	return
// }
