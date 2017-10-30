let input = window.prompt("Type Some text");
let number = Number(window.prompt("Type a number"));
let newText = "";

while (number > 0) {
    newText = newText + input;
    number--;
}

window.alert(newText);