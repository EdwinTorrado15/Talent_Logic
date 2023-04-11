/* 
Crea una función llamada getUserInfo que tome un ID de usuario como argumento y devuelva una promesa que resuelva con un objeto que contenga la siguiente información del usuario: nombre, correo electrónico, edad, ciudad de residencia y los últimos 5 tweets del usuario (usando el nombre de usuario).
Para resolver este ejercicio, debes crear varias funciones que devuelvan promesas para obtener cada una de las piezas de información del usuario:

1) Crea una función llamada getUserData que tome un ID de usuario como argumento y devuelva una promesa que resuelva con un objeto de datos del usuario con ese ID (puedes simular la respuesta de una API externa usando setTimeout).

2) Crea una función llamada getUserTweets que tome un nombre de usuario como argumento y devuelva una promesa que resuelva con una lista de los últimos 5 tweets del usuario (puedes simular la respuesta de una API externa usando setTimeout).

3) Crea una función llamada getUserAge que tome una fecha de nacimiento como argumento y devuelva una promesa que resuelva con la edad del usuario en años (puedes calcular la edad usando la fecha actual).

4)Utiliza las funciones anteriores dentro de getUserInfo para obtener la información del usuario, y devuelve un objeto con toda la información obtenida.
*/

const userData = [
  {
    id: 1,
    name: "John Smith",
    email: "johnsmith@example.com",
    birthday: "1980-01-01",
    city: "New York",
    username: "jsmith",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    birthday: "1990-05-15",
    city: "Los Angeles",
    username: "jdoe",
  },
];

const tweetsData = [
  {
    username: "jsmith",
    tweets: [
      "Just had a great meeting with my team!",
      "Excited to announce our new product launch!",
      "Happy Friday everyone!",
      "Can't wait for the weekend!",
      "Heading out for vacation tomorrow!",
    ],
  },
  {
    username: "jdoe",
    tweets: [
      "Working hard on a new project!",
      "Looking forward to the weekend!",
      "Enjoying the sunshine in LA!",
      "What's everyone up to this weekend?",
      "Trying out a new restaurant tonight!",
    ],
  },
];

const getData = (data) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const result = data;
        resolve(result);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};

const getUserData = (id) => {
  return getData(userData).then((res) => {
    const user = res.find((item) => item.id === id);
    if (user) {
      return {
        name: user.name,
        email: user.email,
        birthday: user.birthday,
        city: user.city,
      };
    } else {
      throw new Error(`Usuario no encontrado por el: ${id}`);
    }
  });
};

const getUserTweets = (username) => {
  return getData(tweetsData).then((res) => {
    const userTweets = res.find((item) => item.username === username);
    if (userTweets) {
      return userTweets.tweets.slice(0, 5);
    } else {
      throw new Error(`No se encontrar tweets del usuario: ${username}`);
    }
  });
};

const getUserAge = (birthday) => {
  return new Promise((resolve, reject) => {
    try {
      const today = new Date();
      const birthDate = new Date(birthday);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      resolve(age);
    } catch (error) {
      reject(error);
    }
  });
};

const getUserInfo = (id) => {
  return Promise.all([
    getUserData(id),
    getUserTweets(userData.find((item) => item.id === id)?.username),
    getUserAge(userData.find((item) => item.id === id)?.birthday),
  ]).then(([userData, tweets, age]) => {
    return {
      name: userData.name,
      email: userData.email,
      city: userData.city,
      tweets: tweets,
      age: age,
    };
  });
};

try {
  getUserInfo(2).then((res) => console.log(res));
} catch (error) {
  console.log(error);
}
