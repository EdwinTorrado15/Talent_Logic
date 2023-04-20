const fs = require('fs');

const filePath = 'archivo1.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  const lines = data.split('\n');

  const longestLine = lines.reduce((longest, line) => {
    return line.length > longest.length ? line : longest;
  }, '');

  console.log(`La línea más larga en el archivo "${filePath}" es:`);
  console.log(longestLine);
});
