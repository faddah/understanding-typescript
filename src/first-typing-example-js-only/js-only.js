console.log(`js-only.js in da hizzzzzzouse!!!`);

const button = document.querySelector(`button`);
const input1 = document.getElementById(`num1`);
const input2 = document.getElementById(`num2`);
const result = document.getElementById(`result`);

const add = (num1, num2) => typeof num1 === `number` && typeof num2 === `number` ? num1 + num2	: +num1 + +num2;

button.addEventListener(`click`, () => {
	console.log(add(input1.value, input2.value));
	result.textContent = add(input1.value, input2.value);
});