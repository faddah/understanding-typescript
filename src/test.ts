export default function test(): void {
	const x: number = 2;
	let y: number = 4;

	function update(arg: number): number {
		return Math.random() + y * arg;
	}

	y = 2;
	// ?;
	y++;

	const theResult: number = update(x);
	console.log(`The Math.Rand() Test Result:\t\t${theResult}`);
}