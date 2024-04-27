export default function test() {
    var x = 2;
    var y = 4;
    function update(arg) {
        return Math.random() + y * arg;
    }
    y = 2;
    y++;
    var theResult = update(x);
    console.log("The Math.Rand() Test Result:\t\t".concat(theResult));
}
//# sourceMappingURL=test.js.map