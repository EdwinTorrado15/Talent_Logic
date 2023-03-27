const prompt = require("prompt-sync")();

const esCapicua = (numero) => {
    const caracteres = numero.split("");
    const invertido = caracteres.reverse().join("");
    return numero === invertido;
  };
  
  // Ejemplo de uso
  console.log(esCapicua("12321")); // true
  console.log(esCapicua("12345")); // false
  