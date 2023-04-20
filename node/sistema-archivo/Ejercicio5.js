/* Leer un archivo */

const fs = require("fs");

fs.readFile("Ejercicio4.js", "utf-8", (error, contenido) => {
  if (error) {
    console.log("Hubo un error");
    return;
  }

  console.log(contenido);
});
