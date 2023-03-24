/* Diseñar el algoritmo correspondiente a un programa, que:
Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
Carga la tabla con valores numéricos enteros.
Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en pantalla.
 */

const prompt = require("prompt-sync")();

let matriz = Array.from({ length: 5 }, () =>
  Array.from({ length: 5 }, () => parseInt(prompt("Introduce un número:")))
);

let sumaFila = matriz.map((fila) => fila.reduce((a, b) => a + b));

let sumaColumna = matriz.reduce((a, b) => a.map((x, i) => x + b[i]));

sumaFila.forEach((suma, i) =>
  console.log(`La suma de la fila ${i} es ${suma}`)
);

sumaColumna.forEach((suma, i) =>
  console.log(`La suma de la columna ${i} es ${suma}`)
);

console.log("Matriz ->", matriz);
