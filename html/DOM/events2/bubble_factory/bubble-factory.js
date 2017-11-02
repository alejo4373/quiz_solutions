document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', function (event) {
        console.log(event.target);
        let bubble = document.createElement('img')
        bubble.src = "http://mzayat.com/images/bubble-20clipart-bubble-clip-art-256_251.png"
        
        bubble.style.width = ((Math.random() * 50) + 10) + "px";
        bubble.style.position = "absolute";
        bubble.style.top = ((Math.random() * 90) + 10) + "%";
        bubble.style.left = ((Math.random() * 90) + 10) + "%";
        
        document.body.appendChild(bubble);
    })
})