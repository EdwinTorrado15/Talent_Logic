/* Crea una función llamada getDirections que tome un origen y un destino como argumentos, y devuelva una promesa que resuelva con un objeto de instrucciones de navegación (puedes simular la respuesta de una API externa usando getData). */

const directionsData = [
  {
    origin: "Madrid",
    destination: "Barcelona",
    steps: [
      "Take the highway A2",
      "Exit on km 543",
      "Turn right on Av. Diagonal",
    ],
  },
  {
    origin: "Barcelona",
    destination: "Valencia",
    steps: [
      "Take the highway A7",
      "Exit on km 329",
      "Turn left on Av. del Puerto",
    ],
  },
  {
    origin: "Valencia",
    destination: "Seville",
    steps: [
      "Take the highway A4",
      "Exit on km 532",
      "Turn right on Av. de la Palmera",
    ],
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(directionsData);
    } catch (error) {
      reject(error);
    }
  });
};

const getDirections = (origin, destination) => {
  return new Promise((resolve, reject) => {
    try {
      const directionsData = getData()
        .then((res) => {
          const directions = res.find(
            (item) => item.origin === origin && item.destination === destination
          );
          if (directions) {
            resolve(directions.steps);
          } else {
            reject(`Direccion no encontrada para ${origin} a ${destination}`);
          }
        })
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

try {
  getDirections("Cucuta", "Manizales").then((res) => console.log(res));
} catch (error) {
  console.log(error);
}
