// function alternateColors() {
//     var arr = document.querySelectorAll("p");
//     arr.forEach( function(elem, index){ 
//         if (index % 2 == 0){
//         elem.classList.add("bgGreen");
//         }else {
//             elem.classList.add("bgYellow")
//         }
//     })
// }


var index = 0;

function alternateColors(index) {
    var arr = document.querySelectorAll("p");
    var classArr = ["bgGreen", "bgYellow"];
    
    
    for (var i = 0; i < arr.length; i++) {
        arr[i].classList.add(classArr[index]);
        index = (index === 0 ? 1 : 0);
        console.log(i, index)
    }
}

setInterval(alternateColors, 500)

