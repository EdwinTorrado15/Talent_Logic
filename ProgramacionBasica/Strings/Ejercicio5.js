const prompt = require("prompt-sync")();

// Función para convertir una vocal a mayúscula en una cadena
const convertirVocalMayuscula = (cadena, vocal) =>
  cadena.replace(new RegExp(vocal, "gi"), vocal.toUpperCase());

// Pedir al usuario que introduzca una frase y una vocal
const frase = prompt("Introduce una frase: ");
const vocal = prompt("Introduce una vocal: ");

// Convertir la vocal a mayúscula en la frase y mostrarla en la consola
const fraseModificada = convertirVocalMayuscula(frase, vocal);
console.log(fraseModificada);
