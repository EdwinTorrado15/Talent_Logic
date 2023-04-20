/* most repeated letter */

const fs = require("fs");
const _ = require("lodash");

const filePath = "archivo1.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  const words = data.split(/\s+/);

  const mostCommonWord = _.chain(words)
    .countBy()
    .toPairs()
    .max(_.last)
    .head()
    .value();

  console.log(
    `La palabra más común en el archivo "${filePath}" es "${mostCommonWord[0]}"`
  );
});
