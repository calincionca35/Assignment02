/*eslint-env browser*/
//The “Coin Flip” Game
var coinFlip;
coinFlip = Math.random();

var choice;
choice = window.prompt("Enter Heads or Tails");

if ((coinFlip <= 0.5) && (choice === "Heads")) {
    window.console.log("The flip was heads and you chose heads...you win!");
} else if ((coinFlip <= 0.5) && (choice === "Tails")) {
    window.console.log("The flip was heads but you chose tails...you lose!");
} else if ((coinFlip > 0.5) && (choice === "Heads")) {
    window.console.log("The flip was tails but you chose heads...you lose!");
} else if ((coinFlip > 0.5) && (choice === "Tails")) {
    window.console.log("The flip was tails and you chose tails...you win!");
}



//8. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.

/*var choice;
choice = window.prompt("Enter True or False");

if ((coinFlip <= 0.5) && (choice === "False")) {
    window.console.log("False");
} else if ((coinFlip <= 0.5) && (choice === "True")) {
    window.console.log("False");
} else if ((coinFlip > 0.5) && (choice === "False")) {
    window.console.log("False");
} else if ((coinFlip > 0.5) && (choice === "True")) {
    window.console.log("True");
}*/
