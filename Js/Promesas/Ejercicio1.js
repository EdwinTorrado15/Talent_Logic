/* Crea una función llamada sum que tome dos números como argumentos y devuelva una promesa que resuelva con la suma de estos dos números. */

const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Los argumentos deben ser números");
      }
      resolve(a + b);
    } catch (error) {
      reject(error);
    }
  });
};

try {
  sum(8, 10)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  sum("a", "b")
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
} catch (error) {
  console.error(error);
}
