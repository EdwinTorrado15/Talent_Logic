const prompt = require("prompt-sync")();

const formatearPalabra = (palabra) => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
};

// Pedir el nombre completo del usuario
const nombreCompleto = prompt("Introduce tu nombre completo: ");

// Mostrar el nombre completo en minúsculas
console.log(nombreCompleto.toLowerCase());

// Mostrar el nombre completo en mayúsculas
console.log(nombreCompleto.toUpperCase());

// Mostrar el nombre completo con la primera letra de cada palabra en mayúsculas
const nombres = nombreCompleto.split(" ");
const nombreFormateado = nombres.map(formatearPalabra).join(" ");
console.log(nombreFormateado);
