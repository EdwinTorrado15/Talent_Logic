function sumarArreglo(arreglo) {
    return arreglo.reduce((a, b) => a + b, 0);
  }
  
module.exports = {
    sumarArreglo: sumarArreglo
}