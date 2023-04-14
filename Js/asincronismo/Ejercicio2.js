/* 
Implementa una función llamada resolverPromesa que recibe
un parámetro llamado resuelve que representa si la promesa
debe resolverse o rechazarse.
Si el parámetro resuelve es true, la función debe retornar una
promesa que se resuelve con el valor "La promesa fue
resuelta".
Si el parámetro resuelve es false, la función debe retornar una
promesa que se rechaza con el valor "La promesa fue
rechazada".
*/

const resolverPromesa = async (resuelve) => {
  return new Promise((resolve, reject) => {
    if (resuelve) {
      resolve("La promesa fue resuelta");
    } else {
      reject("La promesa fue rechazada");
    }
  });
};

resolverPromesa(true)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));
