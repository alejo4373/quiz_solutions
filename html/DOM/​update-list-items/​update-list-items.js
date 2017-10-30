function changeListItem() {
    let options = ['one', 'two', 'three', 'four'];
    let itemNumber = window.prompt("Please type the item number you want to change");
    let newText = window.prompt("Enter new text");

    if (options.includes(itemNumber)) {
        document.getElementById(itemNumber).innerText = newText;
    }
    else {
        document.getElementById("one").innerText = newText;        
    }
}

setInterval(changeListItem, 1000)