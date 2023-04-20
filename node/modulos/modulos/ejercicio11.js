function contarLetras(cadena) {
  let contador = {};
  cadena = cadena.replace(/[^a-zA-Z]/g, ""); // eliminamos caracteres especiales y espacios
  for (let letra of cadena) {
    letra = letra.toLowerCase();
    contador[letra] = (contador[letra] || 0) + 1;
  }
  return contador;
}

module.exports = {
    contarLetras: contarLetras,
};
