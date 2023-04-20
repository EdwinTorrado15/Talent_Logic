const funcionPromedio = require("./modulos/ejercicio13.js");

const estudiantes = [
  { nombre: "Juan", promedio: 8.5 },
  { nombre: "María", promedio: 9.0 },
  { nombre: "Pedro", promedio: 7.8 },
];

console.log(funcionPromedio.mejorPromedio(estudiantes));
