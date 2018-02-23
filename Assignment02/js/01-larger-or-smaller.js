/*eslint-env browser*/
//Larger or Smaller?
var num1 = parseInt(window.prompt("Please enter an integer"), 10);
var num2 = parseInt(window.prompt("Please enter an integer"), 10);
if (num1 > num2) {
    window.document.write(num1);
} else if (num2 > num1) {
    window.document.write(num2);
} else {
    window.document.write("The two numbers are equal");
}