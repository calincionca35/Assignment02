/*eslint-env browser*/
//9. The Pluralizer
var num = parseInt(window.prompt("Please enter a number"), 10);
var noun = window.prompt("Please enter a noun");

if (num === 1) {
    window.document.write(num + " " + noun);
} else if (num > 1 && noun === "sheep") {
    window.document.write(num + " " + noun);
} else if (num > 1 && noun === "goose") {
    window.document.write(num + " " + "geese");
} else if (num > 1) {
    window.document.write(num + " " + noun + "s");
}