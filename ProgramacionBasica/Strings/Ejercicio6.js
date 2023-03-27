const prompt = require("prompt-sync")();

// Función para cambiar el dominio de un correo electrónico
const cambiarDominioCorreo = (correo, nuevoDominio) =>
  correo.replace(/@[\w.]+/g, "@" + nuevoDominio);

// Pedir al usuario que introduzca un correo electrónico
const correoOriginal = prompt("Introduce tu correo electrónico: ");

// Cambiar el dominio del correo electrónico y mostrarlo en la consola
const correoNuevo = cambiarDominioCorreo(correoOriginal, "ceu.es");
console.log(correoNuevo);
