function obtenerCadenaMasLarga(arr) {
  let cadenaMasLarga = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > cadenaMasLarga.length) {
      cadenaMasLarga = arr[i];
    }
  }
  return cadenaMasLarga;
}

module.exports = {
  obtenerCadenaMasLarga: obtenerCadenaMasLarga,
};
