//Prevent form submition
document.querySelector("#myForm").addEventListener("submit", function (event) {
    event.preventDefault();
})

document.querySelector("#sendbutton").addEventListener("click", function () {
    let content = document.querySelector("#inputtext").value;
    if (content) {
        let newItem = document.createElement("li");
        let myList = document.querySelector("ul");  //Node to the <ul> element
        newItem.innerText = content;
        myList.appendChild(newItem);
        document.querySelector("#inputtext").value = "";
    }

})

document.addEventListener('click', function (event) {
    if (event.target.nodeName === "LI") {
        toggleDone(event.target);
    }
});

document.querySelector("#removedone").addEventListener("click", function (event) {
    let myList = document.querySelectorAll("li")
    myList.forEach(function (currentElement) {
        if (currentElement.style.textDecoration) {
            currentElement.remove();
        }
    })
})

function toggleDone(htmlElement) {
    if (!htmlElement.style.textDecoration) {
        htmlElement.style.textDecoration = "line-through"
    } else {
        htmlElement.style.textDecoration = ""
    }
}
