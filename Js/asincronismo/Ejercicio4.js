/* 
Implementa una función llamada calcular que reciba dos
parámetros numéricos llamados a y b, y otro parámetro de
tipo string llamado operacion que representa la operación
matemática que se desea realizar (puede ser "suma", "resta",
"multiplicacion", o "division").
La función debe retornar una promesa que se resuelve con el
resultado de la operación matemática entre a y b, de acuerdo
con el valor del parámetro operacion.
Si el parámetro operacion no tiene un valor válido, la promesa
debe ser rechazada con un mensaje de error.
*/

const calcular = async (a, b, operacion) => {
  return new Promise((resolve, reject) => {
    switch (operacion) {
      case "suma":
        resolve(a + b);
        break;
      case "resta":
        resolve(a - b);
        break;
      case "multiplicacion":
        resolve(a * b);
        break;
      case "division":
        if (b === 0) {
          reject("No se puede dividir por cero");
        } else {
          resolve(a / b);
        }
        break;
      default:
        reject("Operacion no valida");
        break;
    }
  });
};

calcular(4, 2, "suma")
  .then((resultado) => console.log("El resultado es:", resultado))
  .catch((error) => console.error("Error:", error));
