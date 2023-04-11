/* Crea una función llamada getUserData que tome un ID de usuario como argumento y devuelva una promesa que resuelva con el objeto de datos del usuario con ese ID (puedes simular la respuesta de una API externa usando getData) */

const personajes = [
  {
    id: 1,
    nombre: "Gandalf",
    clase: "Mago",
    raza: "Humano",
    nivel: 10,
    vida: 100,
    armadura: 10,
    ataque: 10,
    magia: 100,
  },
  {
    id: 2,
    nombre: "Legolas",
    clase: "Arquero",
    raza: "Elfo",
    nivel: 10,
    vida: 100,
    armadura: 10,
    ataque: 10,
    magia: 100,
  },
  {
    id: 3,
    nombre: "Gimli",
    clase: "Guerrero",
    raza: "Enano",
    nivel: 10,
    vida: 100,
    armadura: 10,
    ataque: 10,
    magia: 100,
  },
];

const getUserData = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = personajes.find((user) => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(`No se encontro al personaje con el id ${userId}.`);
      }
    } catch (error) {
      reject(error);
    }
  });
};

try {
  getUserData(3)
    .then((user) => console.log(user))
    .catch((error) => console.error(error));
} catch (error) {
  console.error(error);
}
