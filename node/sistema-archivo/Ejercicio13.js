/* CSV to Json */

const csv = require("csvtojson");
const fs = require("fs");

const fileName = "datosjson.csv";

csv()
  .fromFile(fileName)
  .then((jsonObj) => {
    fs.writeFile("datossss.json", JSON.stringify(jsonObj), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Archivo JSON creado");
    });
  });
