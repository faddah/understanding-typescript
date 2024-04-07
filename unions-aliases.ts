type Combinable = number | string;
type ConversionDescriptor = 'NUM' | 'STR';

function combine(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
): any {
	return typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'NUM'
		? +input1 + +input2
		: input1.toString() + input2.toString();
}

const theDiv: HTMLDivElement = document.querySelector('#resultDiv')!;
theDiv.innerHTML = `<h1>${combine(30, 26, 'NUM').toString()}</h1>`;
const combinedNamesElm: HTMLHeadingElement = document.createElement('h2');
const combinedNamesElm2: HTMLHeadingElement = document.createElement('h2');
combinedNamesElm2.textContent = combine('30', '26', 'NUM');
combinedNamesElm.textContent = combine('Max ', 'Anna', 'STR');
theDiv.append(combinedNamesElm2);
theDiv.append(combinedNamesElm);

console.log(combine(30, 26, 'NUM'));

console.log(combine('30', '26', 'NUM'));

console.log(combine('Max ', 'Anna', 'STR'));

// let result;
// if (typeof input1 === 'number' && typeof input2 === 'number') {
// 	result = input1 + input2;
// } else {
// 	result = input1.toString() + input2.toString();
// }
// return result;

