function swapListItems() {
    let options = ['one', 'two', 'three', 'four'];

    //User input
    let firstItemToSwap = window.prompt("Please type the first item number you want to swap");
    let secondItemToSwap = window.prompt("Please type the item number you want to swap with");

    if (options.includes(firstItemToSwap) && options.includes(secondItemToSwap)) {
        //Select the elemens if we have valide id's
        let firstElement = document.getElementById(firstItemToSwap);
        let secondElement = document.getElementById(secondItemToSwap);

        //Store innerText of the 1st element in a local variable so that we dont lose it
        let saved = firstElement.innerText;

        //Swap
        firstElement.innerText = secondElement.innerText;
        secondElement.innerText = saved;
    }
    else {
        window.alert("invalid input")
    }
}

setInterval(swapListItems, 1000)