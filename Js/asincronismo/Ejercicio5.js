/* 
Implementa una función llamada tamanioTotalRespuestas
que recibe una lista de URLs llamada urls.
La función debe realizar una petición HTTP a cada URL y sumar
el tamaño en bytes de las respuestas.
La función debe retornar una promesa que se resuelve con el
tamaño total en bytes de las respuestas.
*/

const axios = require("axios");

const tamanioTotalRespuestas = async (urls) => {
  try {
    const responses = await Promise.all(
      urls.map(async (url) => await axios.get(url)),
    );

    const totalSize = responses.reduce((acc, response) => {
      const contentLength = parseInt(response.headers["content-length"], 10);
      return acc + contentLength;
    }, 0);

    console.log("Respuesta:", totalSize);
    return totalSize;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener tamaño total de respuestas");
  }
};

// Ejemplo de uso
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
];
tamanioTotalRespuestas(urls)
  .then((totalBytes) =>
    console.log(`El tamaño total de las respuestas es ${totalBytes} bytes`)
  )
  .catch((error) => console.error(error));
