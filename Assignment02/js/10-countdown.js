/*eslint-env browser*/
//10. Countdown
var inpNum = parseInt(window.prompt("Plese enter a number"), 10);
for (inpNum; inpNum >= 0; inpNum -= 1) {
    window.document.write(inpNum + "<br>");
}