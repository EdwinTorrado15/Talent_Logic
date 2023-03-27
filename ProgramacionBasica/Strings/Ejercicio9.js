const prompt = require("prompt-sync")();

const oracion = prompt("Introduce una oración: ");

const palabras = oracion.split(" ");

console.log(`La oración tiene ${palabras.length} palabras.`);
