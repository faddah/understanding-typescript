export default function test() {
    const x = 2;
    let y = 4;
    function update(arg) {
        return Math.random() + y * arg;
    }
    y = 2;
    y++;
    const theResult = update(x);
    console.log(`The Math.Rand() Test Result:\t\t${theResult}`);
}
//# sourceMappingURL=test.js.map