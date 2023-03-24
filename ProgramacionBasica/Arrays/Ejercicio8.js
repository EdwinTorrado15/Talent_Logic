//Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.

//Ejemplo: [1,2,3,4,5,6,7,8,9,10] -> 6

let arrayAleatorio = Array.from({ length: 11 }, () =>
  Math.floor(Math.random() * 100)
);

const mitadDelArray = arrayAleatorio[Math.floor(arrayAleatorio.length / 2)];

console.log("Array aleatorio ->", arrayAleatorio);
console.log("Mitadl del array ->", mitadDelArray);
