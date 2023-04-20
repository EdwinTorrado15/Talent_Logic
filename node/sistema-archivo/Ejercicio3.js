/* Num par */

function parImpar(numero) {
  if (numero % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

if (process.argv[2]) {
  console.log(parImpar(process.argv[2]));
}
