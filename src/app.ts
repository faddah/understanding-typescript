let userInput: unknown; // this is a better choice than 'any' because 
// it's more specific/restrictive
// you first have to checkt the TYPE of userInput before you can assign 
// it to another variable
let userName: string;

userInput = 5;
userInput = 'faddah';
// userName = userInput; // this will throw an error because userName is
// a string, and userInput is an unknown
if (typeof userInput === 'string') {	// this is that type check that makes it work
	userName = userInput
	console.log(userName, userInput)	// this will run
}

const generateError = (message: string, code: number): never => {		// never means that the 
	// function (in this case, an error throw) will never return anything
	throw { message: message, errorCode: code }
}

// Another example of a function that never returns anything is the infinite loop
// function that never ends
const infiniteLoop = (): never => {
	while (true) {
		console.log('This is an infinite loop')
	}
}

// infiniteLoop() // this will run forever

const theButton = document.querySelector('button')!;
theButton.addEventListener('click', () => {
	console.log('Button clicked!');
}); // Add a closing parenthesis ')' here

generateError('An error occurred!', 500); // this will throw an error because i told it to — so there.

const errorResult = generateError('An error occurred!', 500);
console.log(errorResult); // this will not run because the function above will throw an error

