var canvas = document.getElementById("stage");
var ctx = canvas.getContext("2d");

var x = 400;

ctx.beginPath();
    ctx.rect(x, 40, 50, 50);
    ctx.fillStyle = '#FF0000';
    ctx.fill();
ctx.closePath();
x++; 