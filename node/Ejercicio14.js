/* Information directories */

const fs = require('fs');
const path = require('path');

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(`Error al obtener las estadísticas del archivo ${filePath}:`, err);
        return;
      }

      console.log(`${file}:`);
      console.log(`Tamaño: ${stats.size} bytes`);
      console.log(`Fecha de creación: ${stats.birthtime}`);
      console.log(`Última fecha de modificación: ${stats.mtime}`);
      console.log();
    });
  });
});
