/*eslint-env browser*/
//3. The “Coin Flip” Game Redux

var coinFlip;
var i;

for (i = 0; i < 10; i += 1) {
    i += i;
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else if (coinFlip === 1) {
        window.console.log("Tail");
    }
}