document.addEventListener('click', function (event) {
    console.log(event.target.classList)
    if (event.target.nodeName === "DIV") {
        let currentClass = event.target.classList
        currentClass.contains("black") ? event.target.classList.remove("black")
                                       : event.target.classList.add("black")
    }
})
