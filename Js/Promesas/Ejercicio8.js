/* Crea una función llamada translate que tome un texto y un idioma de destino como argumentos, y devuelva una promesa que resuelva con el texto traducido al idioma de destino (puedes simular la respuesta de una API externa usando getData). */

const translations = [
  {
    language: "en",
    text: "Hello, world!",
    translation: "Hola, mundo!",
  },
  {
    language: "fr",
    text: "Bonjour, le monde!",
    translation: "¡Hola, mundo!",
  },
  {
    language: "de",
    text: "Hallo, Welt!",
    translation: "¡Hola, mundo!",
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(translations);
    } catch (error) {
      reject(error);
    }
  });
};

const translate = (text, targetLanguage) => {
  return new Promise((resolve, reject) => {
    try {
      getData()
        .then((translations) => {
          const translation = translations.find(
            (t) => t.language === targetLanguage
          );
          if (!translation) {
            throw new Error("Lenguaje no encontrado");
          }
          resolve(translation.translation);
        })
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

try {
  translate("Hello, world!", "fr").then((translation) =>
    console.log(translation)
  );
} catch (error) {
  console.error(error);
}
