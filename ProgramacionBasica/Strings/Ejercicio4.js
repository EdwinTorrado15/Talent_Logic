const prompt = require("prompt-sync")();

// Función para invertir una cadena
const invertirCadena = (cadena) => cadena.split("").reverse().join("");

// Pedir al usuario que introduzca una frase
const frase = prompt("Introduce una frase: ");

// Invertir la frase y mostrarla en la consola
const fraseInvertida = invertirCadena(frase);
console.log(fraseInvertida);
