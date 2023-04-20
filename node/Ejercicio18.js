const fs = require("fs");
const _ = require("lodash");

const filePath = "archivo1.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  const words = data.split(/\s+/);

  const wordFrequency = _.chain(words)
    .countBy()
    .toPairs()
    .map(([word, frequency]) => ({ word, frequency }))
    .orderBy(["frequency", "word"], ["desc", "asc"])
    .value();

  console.log(`Frecuencia de palabras en el archivo "${filePath}":`);
  console.table(wordFrequency);
});
