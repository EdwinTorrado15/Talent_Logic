/* 2). Crea una función llamada getData que simule una llamada a una API externa (por ejemplo, usando setTimeout) y devuelva una promesa que resuelva con un objeto de datos. */

const getData = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const data = {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
        };
        resolve(data);
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
};

try {
  getData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
} catch (error) {
  console.error(error);
}
