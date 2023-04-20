const funcionNombreCompleto = require("./modulos/ejercicio10.js");

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
};
const nombreCompleto = funcionNombreCompleto.obtenerNombreCompleto(persona);
console.log(`El nombre completo es ${nombreCompleto}`);
