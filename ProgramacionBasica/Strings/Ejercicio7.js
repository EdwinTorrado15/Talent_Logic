const prompt = require("prompt-sync")();

// Pedir al usuario que introduzca la fecha de nacimiento
const fechaNacimiento = prompt(
  "Introduce tu fecha de nacimiento en formato dd/mm/aaaa: "
);

// Separar la fecha en sus componentes
const [dia, mes, anio] = fechaNacimiento.split("/").map(Number);

// Mostrar el resultado en la consola
console.log(`Día: ${dia}`);
console.log(`Mes: ${mes}`);
console.log(`Año: ${anio}`);
