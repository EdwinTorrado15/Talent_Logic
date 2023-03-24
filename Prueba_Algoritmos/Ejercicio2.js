const numeroRepetidos = (listaNumeros) => {
  let contadorNumeros = {};

  // Contar la cantidad de veces que aparece cada número
  for (let i = 0; i < listaNumeros.length; i++) {
    let numero = listaNumeros[i];
    contadorNumeros[numero] = (contadorNumeros[numero] || 0) + 1;
  }

  // Encontrar el número que aparece más veces
  let numeroMasRepetido = listaNumeros[0];
  let cantidadRepeticiones = contadorNumeros[numeroMasRepetido];

  for (let numero in contadorNumeros) {
    if (contadorNumeros[numero] > cantidadRepeticiones) {
      numeroMasRepetido = numero;
      cantidadRepeticiones = contadorNumeros[numero];
    }
  }

  // Imprimir el resultado
  if (cantidadRepeticiones === 1) {
    console.log("Cada número aparece exactamente una vez.");
  } else {
    console.log(
      "El número que aparece más veces es el " +
        numeroMasRepetido +
        ", que aparece " +
        cantidadRepeticiones +
        " veces."
    );
  }
};

// Ejemplo de uso
let listas = [3, 7, 8, 4, 6, 10, 7, 7, 11];
console.log(numeroRepetidos(listas));
