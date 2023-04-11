/* Crea una función llamada uploadFile que tome un nombre de archivo y una promesa de File como argumentos, y devuelva una promesa que resuelva con una URL de descarga del archivo subido al servidor. */

const uploadFile = (fileName, filePromise) => {
  return new Promise((resolve, reject) => {
    filePromise
      .then((file) => {
        const uploadUrl = `../${fileName}`;
        resolve(uploadUrl);
      })
      .catch((error) => reject(error));
  });
};

const file = new File(["Hola, mundo!"], "archivo.txt", { type: "text/plain" });
const filePromise = Promise.resolve(file);

uploadFile("archivo.txt", filePromise)
  .then((uploadUrl) => console.log(uploadUrl))
  .catch((error) => console.error(error));
