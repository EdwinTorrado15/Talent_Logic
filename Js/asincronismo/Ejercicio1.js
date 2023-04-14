/* 
Implementa una función asyncrona llamada esperarSegundos que
reciba un parámetro llamado segundos que representa la
cantidad de segundos que la función debe esperar antes de
resolver la promesa.
La función debe retornar una promesa que se resuelve
después de esperar la cantidad de segundos especificada en
el parámetro.
*/

const esperarSegundos = async (segundos) => {
  await new Promise((resolve) => setTimeout(resolve, segundos * 1000));
};

esperarSegundos(3)
  .then(() => console.log("Terminó"))
  .catch((error) => console.error(error));
