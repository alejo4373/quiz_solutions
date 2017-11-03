let countKey = "muffinCount";
let lsCount = window.localStorage;

//If we don't have anything in Local Storage
// or we have something that's not a number
// then start with the value of the span in the HTML
if (lsCount.getItem(countKey) == undefined || isNaN(lsCount.getItem(countKey))) {
    lsCount.setItem(countKey, document.querySelector("#display").innerText); //Take the value from span and put in local storage
}
else {
    //Means we have a valid value in local storage
    //so render it into #display
    document.querySelector("#display").innerText = lsCount.getItem(countKey)
}


let eat = document.querySelector("#eat");       //Variable with the node to the #eat element
let bake = document.querySelector("#bake");     //Variable with the node to the #bake element


bake.addEventListener("click", function () {
    let total = Number(lsCount.getItem(countKey)) + 5;      //Do the math
    lsCount.setItem(countKey, total);                       //Set the local storage
    document.querySelector("#display").innerText = total;   //Set the display
})

eat.addEventListener("click", function () {
    let total = Number(lsCount.getItem(countKey)) - 5;          //Do the math
    if (total >= 0) {   //While our total is >= 0 set local storage and display
        lsCount.setItem(countKey, total);                       //Set the local storage
        document.querySelector("#display").innerText = total;   //Set the display
    }
})
