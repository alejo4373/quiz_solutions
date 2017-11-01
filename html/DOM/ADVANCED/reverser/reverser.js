document.addEventListener("DOMContentLoaded",function(){
    var myform = document.querySelector('form');
    
    myform.addEventListener("submit", function(event){
        document.querySelector('p').innerText = document.querySelector('#text-field').value.split('').reverse().join('');
        event.preventDefault()
    })
}
)