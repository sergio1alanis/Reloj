//  function comenzar() {
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
// ctx.translate(150, 75);
ctx.translate(radius, radius);
radius = radius * .90;
setInterval(dibujoReloj, 1000);
// }



function dibujoReloj() {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    dibujaCaratula(ctx, radius);
    dibujaNumero(ctx, radius);
    dibujaTiempo(ctx, radius);
}

function dibujaCaratula(ctx, radius) {
    const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle('white');
    ctx.fill();

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function dibujaNumero(ctx, radius) {
    ctx.font = radius * 0.15 + "px arial";
    ctx.
}

//window.addEventListener("load", comenzar, false);