const fs = require('fs');
const readline = require('readline');

const filePath = 'archivo1.txt';

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  lines.sort();

  console.log(`Las líneas en el archivo "${filePath}" en orden alfabético son:`);
  console.log(lines);
});
