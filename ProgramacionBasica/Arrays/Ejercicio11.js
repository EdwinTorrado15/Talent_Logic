/* Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado y crear una función que rellene el array o arreglo con los múltiplos de un número pedido por teclado. Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.
 */

const prompt = require("prompt-sync")();

const array = Array.from({
  length: parseInt(prompt("Introduce el tamaño del array:")),
});

const rellenarArray = (array, multiplo) => {
  array.forEach((element, index) => {
    array[index] = multiplo * (index + 1);
  });
};

rellenarArray(array, parseInt(prompt("Introduce el múltiplo:")));

console.log("Arreglo ->", array);
