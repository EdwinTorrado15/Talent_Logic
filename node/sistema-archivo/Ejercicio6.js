/* Get and Update file */

const fs = require("fs");

fs.readFile("archivo1.txt", "utf8", (error, contenido) => {
  if (error) {
    console.error(error);
    return;
  }

  const nuevoContenido = contenido.replace("mundo", "Node.js");

  fs.writeFile("archivo2.txt", nuevoContenido, "utf8", (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("El archivo ha sido modificado y guardado.");
  });
});
