/* Input y Output */

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Cual es tu nombre? ", (nombre) => {
  console.log(`Tu nombre es ${nombre}`);
  r1.close();
});


