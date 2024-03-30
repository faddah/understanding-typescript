console.log(`using-ts.js in da hizzzzzzouse!!!`);

const button = document.querySelector(`button`)! as HTMLButtonElement;
const input1 = document.getElementById(`num1`)! as HTMLInputElement;
const input2 = document.getElementById(`num2`)! as HTMLInputElement;
const result = document.getElementById(`result`)! as HTMLTextAreaElement;

const add = (num1: number, num2: number): number => num1 + num2;

button.addEventListener(`click`, () => {
	console.log(add(+input1.value, +input2.value));
	result.textContent = add(+input1.value, +input2.value).toString();
});