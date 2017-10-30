function logKindOfNum() {
    let number = Number(window.prompt("Type a number"));

    if (isNaN(number)) {
        window.alert("That's not a number")
    }
    else if (number % 2 === 0) {
        window.alert(number + " is an EVEN number")
    }
    else {
        window.alert(number + " is an ODD number")
    }

}

setInterval(logKindOfNum, 500);