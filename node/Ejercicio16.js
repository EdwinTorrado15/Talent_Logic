/* Modify text */


const fs = require("fs");

const filePath = "archivo1.txt";

const searchWord = "animalotes";
const replaceWord = "animales";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  const modifiedData = data.replace(new RegExp(searchWord, "g"), replaceWord);

  fs.writeFile(filePath, modifiedData, "utf8", (err) => {
    if (err) {
      console.error("Error al escribir en el archivo:", err);
      return;
    }

    console.log(
      `Se han reemplazado todas las instancias de "${searchWord}" por "${replaceWord}" en el archivo "${filePath}"`
    );
  });
});
