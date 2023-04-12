const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const cursor = document.querySelector(".cursor");
const cursorColor = document.getElementById("cursor-color");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let painting = false;
let currentColor = "#363457"; // Establece un color inicial

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
  ctx.beginPath();
}

ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.strokeStyle = currentColor; // Establece el color inicial

canvas.addEventListener("mouseenter", function () {
  painting = true;
});

canvas.addEventListener("mouseleave", function () {
  painting = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  // Actualiza el color del cursor
  cursor.style.backgroundColor = "transparent";
  cursorColor.style.backgroundColor = currentColor;
  cursorColor.style.left = x + "px";
  cursorColor.style.top = y + "px";

  // Dibuja la línea en el canvas
  if (painting) {
    ctx.strokeStyle = currentColor;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
});
