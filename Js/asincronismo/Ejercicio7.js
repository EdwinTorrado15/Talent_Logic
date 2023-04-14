/* 
Implementa una función llamada comparar que reciba dos
parámetros numéricos llamados a y b.

Si a es mayor que b, la función debe retornar una promesa
que se resuelve con el valor "a es mayor que b".
Si b es mayor que a, la función debe retornar una promesa
que se resuelve con el valor "b es mayor que a".
Si a y b son iguales, la función debe retornar una promesa que
se rechaza con el valor "a y b son iguales".
*/

const comparar = async (a, b) => {
  try {
    if (a > b) {
      return "a es mayor que b";
    } else if (b > a) {
      return "b es mayor que a";
    } else {
      throw "a y b son iguales";
    }
  } catch (error) {
    throw new Error(error);
  }
};

comparar(3, 6)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error)); // resultado esperado: "a es mayor que b"
