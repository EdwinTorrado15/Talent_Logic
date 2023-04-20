const funcionPar = require("./modulos/ejercicio7.js");

const num = 10;
const esNumPar = funcionPar.esPar(num);

if (esNumPar) {
  console.log(`${num} es un número par.`);
} else {
  console.log(`${num} es un número impar.`);
}
