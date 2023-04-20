function obtenerNombreCompleto(obj) {
  return `${obj.apellido}, ${obj.nombre}`;
}

module.exports = {
    obtenerNombreCompleto: obtenerNombreCompleto,
};
