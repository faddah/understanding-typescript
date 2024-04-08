console.log(`it's TypeScript files time, bay-bee!`);

const resultDiv: HTMLDivElement = document.querySelector('#resultDiv')!;

function addition(n1: number, n2: number, showAnswer: boolean, phrase: string): number {
	const addResult: number = n1 + n2;
	if (showAnswer) {
		console.log(phrase + addResult);
	}
	return addResult;
}

const number1: number = 5;
const number2: number = 2.8;
const printAnswer: boolean = true;
const resultPhrase: string = 'The result is: ';

// let answer: number = addition(number1, number2, printAnswer)!;

addition(number1, number2, printAnswer, resultPhrase);
const answer: number = addition(number1, number2, printAnswer, resultPhrase);

// console.log(`Result: ${answer}`);
resultDiv.innerHTML = `<h2>Result: ${answer}</h2>`;
