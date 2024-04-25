const x: number = 2;
let y: number = 4;

function update(arg: number): number {
	return Math.random() + y * arg;
}

y = 2;
// ?;
y++;

const theResult: number = update(x);
console.log(`theResult:\t\t${theResult}`);
