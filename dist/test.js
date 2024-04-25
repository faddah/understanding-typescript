"use strict";
const x = 2;
let y = 4;
function update(arg) {
    return Math.random() + y * arg;
}
y = 2;
y++;
const theResult = update(x);
console.log(`theResult:\t\t${theResult}`);
//# sourceMappingURL=test.js.map