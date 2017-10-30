function changeHeader() {
    let element = document.getElementById("youTyped");
    let input = window.prompt("Type a something");
    element.innerText = element.innerText + input;
    console.log(document.getElementById("youTyped"));
}
setInterval(changeHeader, 1000);