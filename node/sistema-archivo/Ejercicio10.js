/* Read directory */

const fs = require("fs");

const directory = "./";

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Archivos en el directorio:");
  files.forEach((file) => {
    console.log(file);
  });
});
