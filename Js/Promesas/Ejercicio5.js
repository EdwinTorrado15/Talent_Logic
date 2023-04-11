/* Crea una función llamada getUsers que devuelva una promesa que resuelva con una lista de objetos de usuarios (puedes simular la respuesta de una API externa usando getData) */

const usuarios = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Mary", age: 25 },
  { id: 3, name: "Bob", age: 40 },
];

const getUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(usuarios);
    } catch (error) {
      reject(error);
    }
  });
};

try {
  getUsers().then((res) => console.log(res));
} catch (error) {
  console.log(error);
}
