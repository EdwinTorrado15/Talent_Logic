const fs = require('fs');

const filePath = 'archivo1.txt';

const startingLetter = 'a';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  const regex = new RegExp('\\b' + startingLetter + '\\w+', 'gi');

  const matches = data.match(regex);

  if (matches && matches.length > 0) {
    console.log(`Palabras que empiezan con la letra ${startingLetter}:`);
    matches.forEach((match) => {
      console.log(match);
    });
  } else {
    console.log(`No se encontraron palabras que empiecen con la letra ${startingLetter}`);
  }
});
