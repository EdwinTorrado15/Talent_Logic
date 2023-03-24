//Primer ejercicio

const esPrimo = (n) => {
  //Verificamos si n es menor o igual que   1, si lo es entonces devuelve false
  if (n <= 1) {
    return false;
  }
  //Verificamos si n es divisible entre 2   y n - 1
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const encontrarConsecutivo = (arr) => {
  //Almacenamos todos los resultados en este arreglo por si hay mas sumas que den  numeros primos
  let resultados = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // Calculamos la suma de los elementos de la matriz
    let suma = arr[i] + arr[i + 1];
    //Verificamos si es un numero primo
    if (esPrimo(suma)) {
      resultados.push(
        `El par (${arr[i]},${arr[i + 1]}) suma ${suma}, que es primo.`
      );
    }
  }

  //Verificamos si hay resultados y si es asi los agregue al arreglo de resultados
  if (resultados.length > 0) {
    return resultados.join("\n");
  } else {
    return "No se encontro ningun par con dicha propiedad";
  }
};

let lista = [5, 3, 4, 7, 11, 13, 17];
console.log(encontrarConsecutivo(lista));
