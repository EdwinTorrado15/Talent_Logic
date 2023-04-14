/* 
Implementa una función llamada obtenerInformacion que
reciba un parámetro llamado id que representa el
identificador de un usuario en una API externa.
La función debe hacer una llamada a la API externa para
obtener la información del usuario con el identificador
especificado en el parámetro id.
Si la llamada a la API es exitosa, la función debe retornar una
promesa que se resuelve con la información del usuario.
Si la llamada a la API es fallida, la función debe retornar una
promesa que se rechaza con un mensaje de error.
*/

const users = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  },
  {
    id: 3,
    name: "Clementine Bauch",
  },
];

const getUserById = async (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      resolve(user);
    } else {
      reject("Usuario no encontrado");
    }
  });
};

getUserById(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
