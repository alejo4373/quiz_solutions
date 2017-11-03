var textEditor = document.querySelector("#text-editor")
var myKey = "text";
textEditor.addEventListener("input", function(){
    window.localStorage.setItem(myKey, textEditor.value);
})

textEditor.value = window.localStorage.getItem(myKey);