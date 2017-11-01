document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector('h1')

    document.addEventListener("keypress", function (event) {
        var text = elem.innerText
        var character = String.fromCharCode(event.charCode)
            
            if (event.charCode <= 90 && event.charCode >= 65) {
                elem.classList.add('underline')
            }
            else if (/[\.\?!]/.test(event.key)) {
                elem.classList.remove('underline')
            }
            else if(event.charCode === 32){
                character = "\u00A0"; //for some reason using the " " white space string didnt work to write a white space to h1
            }
        elem.innerText = text + character

    })
}
)