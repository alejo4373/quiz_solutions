function colorQuadrants() {
    let quad = window.prompt("Type a quadrant TL, TR, BL ,BR");
    let color = window.prompt("Type a color");
    document.querySelector("#"+quad).style.backgroundColor = color;
}
setInterval(colorQuadrants, 1000);