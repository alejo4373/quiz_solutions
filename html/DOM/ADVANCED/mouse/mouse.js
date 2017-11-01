document.addEventListener("DOMContentLoaded", function(){ //So that the script waits until the page is completelly loaded
    document.addEventListener("mousemove", function(event){ 
        document.querySelector("#coords").innerHTML = "X= "+ event.screenX +"\n" + "Y= "+ event.screenY; 
    })
})
