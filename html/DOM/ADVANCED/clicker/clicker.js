document.addEventListener("DOMContentLoaded",function(){
    document.addEventListener("click", function(event){
        if(event.screenX <= window.innerWidth / 2){ //clicked left side
            document.bgColor = "mediumaquamarine"
        } else {
            document.bgColor = "peachpuff"
        }
    })
}
)