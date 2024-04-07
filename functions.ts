const addIt = (n1: number, n2: number): number => n1 + n2

const printResult = (num: number): void => console.log(`Result: ${num}`)

const printWebResult = (num: number): string => `Result: ${num}`

printResult(addIt(5, 12))

let combineValues: (a: number, b: number) => number
combineValues = addIt
// combineValues = 5	// this will throw an error because combineValues' Type is a function,
// not a number.
// combineValues = printResult // this will work because, though printResult is a Type of
// Function, it only has ONE arg, and it returns a number, not void like printResult

console.log(combineValues(8, 8))


const divResult: HTMLDivElement = document.querySelector('#resultDiv')!
const h1Elm: HTMLHeadingElement = document.createElement('h1')
const h2Elm: HTMLHeadingElement = document.createElement('h2')
const h3Elm: HTMLHeadingElement = document.createElement('h3')
h1Elm.textContent = printWebResult(addIt(5, 12))
h2Elm.textContent = combineValues(8, 8).toString()
divResult.append(h1Elm)!
divResult.append(h2Elm)!

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => cb(n1 + n2)

addAndHandle(10, 20, (result) => console.log(result))

// h3Elm.textContent = addAndHandle(10, 20, (result) => {
// 	result.toString()
// 	return result
// })

h3Elm.textContent = addAndHandle(10, 20, (result) => result.toString())
divResult.append(h3Elm)!


// There's also the undefined type in TypeScript
// let userInput: undefined

// exmaple of a function that returns undefined - you just need to specify it has a return
// type of undefined, like a return with nothing after it, as in below —
// const printResult3 = (num: number): undefined => {
// 	console.log(`Result: ${num}`)
// 	return
// }
