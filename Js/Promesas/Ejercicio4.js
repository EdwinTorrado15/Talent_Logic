/* Crea una función llamada login que tome un nombre de usuario y una contraseña como argumentos, y devuelva una promesa que resuelva con true si las credenciales son válidas, o false en caso contrario. */

const login = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (username === "usuario" && password === "contraseña") {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

try {
  login("usuarioss", "contraseña")
    .then((valid) => console.log(valid))
    .catch((error) => console.error(error));
} catch (error) {
  console.error(error);
}
