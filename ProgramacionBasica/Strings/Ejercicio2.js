const prompt = require("prompt-sync")();

// Función para contar el número de letras de una cadena sin contar los espacios
const contarLetras = (cadena) => cadena.replace(/ /g, "").length;

// Pedir el nombre del usuario
const nombre = prompt("Introduce tu nombre");

// Calcular el número de letras del nombre sin contar los espacios
const numLetras = contarLetras(nombre);

// Mostrar el nombre en mayúsculas y el número de letras sin contar los espacios
console.log(
  `${nombre.toUpperCase()} tiene ${numLetras} letras.`
);
