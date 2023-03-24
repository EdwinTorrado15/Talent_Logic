//Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.

let notas = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let aprobados = [];
let desaprobados = [];

notas.filter((nota) => {
  if (nota >= 13) {
    aprobados.push(nota);
  } else {
    desaprobados.push(nota);
  }
});

let promedioAprobados = aprobados.reduce((a, b) => a + b) / aprobados.length;

let promedioDesaprobados =
  desaprobados.reduce((a, b) => a + b) / desaprobados.length;

console.log("Promedio aprobados ->", promedioAprobados);
console.log("Promedio desaprobados ->", promedioDesaprobados);
