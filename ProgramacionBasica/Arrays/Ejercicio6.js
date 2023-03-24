//ingresa un string de números del cual debes separar todos los números con una coma (,) y formar un array con sus valores.

//Ejemplo: "1,2,3,4,5,6,7,8,9,10" -> [1,2,3,4,5,6,7,8,9,10]
let stringNumeros = "1,2,3,4,5,6,7,8,9,10";
let arrayNumeros = stringNumeros.split(",").map(Number);
console.log(arrayNumeros);