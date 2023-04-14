/* 
Implementa una función llamada cuadradosNumeros que
recibe una lista de números llamada numeros.
La función debe calcular el cuadrado de cada número de la
lista y retorna una promesa que se resuelve con una lista de
objetos. Cada objeto debe tener dos propiedades: número (el
número original) y cuadrado (el cuadrado del número).
Si la lista de números está vacía, la promesa debe ser
rechazada con un mensaje de error.
*/

const cuadradosNumeros = async (numeros) => {
  if (numeros.length === 0) {
    throw new Error("La lista de números está vacía");
  }

  const cuadrados = numeros.map((numero) => {
    const cuadrado = numero * numero;
    return { numero, cuadrado };
  });

  return cuadrados;
};

const numeros = [1, 2, 3, 4, 5];
cuadradosNumeros(numeros)
  .then((cuadrados) => console.log(cuadrados))
  .catch((error) => console.error(error));
