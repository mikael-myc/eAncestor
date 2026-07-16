const mainDiv = document.getElementById("main");
const anSpan = document.getElementById("an");   //ancestor
const nInput = document.getElementById("n");    // name
const speedInputRange = document.getElementById("speed");

let deg = 0;
setInterval(() => {
    mainDiv.style.transform = `rotate(${deg}deg)`;
    deg += speedInputRange.value;
}, 100);