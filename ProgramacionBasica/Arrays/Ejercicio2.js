//Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees de la manera que quieras y muestra por pantalla la media de valores del array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma = array.reduce((a, b) => a + b);

let promedio = suma / array.length;

console.log("Promedio -->", promedio);
