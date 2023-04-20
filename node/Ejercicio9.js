/* Process information */

const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "input.csv";

const outputFile = "output.csv";

let data = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    data.push(row);
  })
  .on("end", () => {
    const writeStream = fs.createWriteStream(outputFile);
    
    writeStream.write("Columna 1, Columna 2, Columna 3\n"); 
    data.forEach((row) => {
      writeStream.write(`${row.Columna1}, ${row.Columna2}, ${row.Columna3}\n`);
    });

    writeStream.end();
    console.log("Datos procesados y escritos en el archivo de salida.");
  });
