//Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición. (FindIndex)

const prompt = require('prompt-sync')();

let array = [1, 2, 3, 4, 5];
let numero = parseInt(prompt("Ingrese un número: "));
let index = array.findIndex((element) => element === numero);

if (index === 1) {
  console.log("El numero no se encuentra en el arreglo");
} else {
  console.log(`El numero no se encuentra en la posicion ${index}`);
}
