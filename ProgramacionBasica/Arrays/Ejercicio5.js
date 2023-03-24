//Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.

let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mayor = Math.max(...vector);
let menor = Math.min(...vector);
let media = vector.reduce((a, b) => a + b) / vector.length;
console.log("Media ->", media);
