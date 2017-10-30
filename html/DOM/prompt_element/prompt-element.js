function promptElement() {
    let container = document.getElementById("container")
    let element = window.prompt("Type html element");
    container.innerHTML = element;  //Will rewrite the entire 
                                    //inner HTML of the selected 
                                    //element and interpret the 
                                    //new input html code
                                    
    //container.innerText = element;     //Will erase the entire
                                        //inner HTML and instead put
                                        //whatever the user input as
                                        //plain string but won't
                                        //and wont recognize any sintax
}

setInterval(promptElement, 1000);