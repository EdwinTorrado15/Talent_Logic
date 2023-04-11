/* Crea una función llamada getWeather que tome una ciudad como argumento, y devuelva una promesa que resuelva con el objeto de tiempo actual para esa ciudad (puedes simular la respuesta de una API externa usando getData) */

const weatherData = [
  {
    city: "Madrid",
    currentWeather: {
      temperature: 20,
      humidity: 0.5,
      wind: 10,
    },
  },
  {
    city: "Barcelona",
    currentWeather: {
      temperature: 22,
      humidity: 0.6,
      wind: 15,
    },
  },
  {
    city: "Valencia",
    currentWeather: {
      temperature: 21,
      humidity: 0.7,
      wind: 20,
    },
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(weatherData);
    } catch (error) {
      reject(error);
    }
  });
};

const getWeather = async (city) => {
  try {
    const weatherData = await getData();
    const weather = weatherData.find((item) => item.city === city);
    return weather.currentWeather;
  } catch (error) {
    throw error;
  }
};

getWeather("Madrid")
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
