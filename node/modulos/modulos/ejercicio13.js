function mejorPromedio(estudiantes) {
  let mejorPromedio = 0;
  let mejorEstudiante = "";

  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > mejorPromedio) {
      mejorPromedio = estudiantes[i].promedio;
      mejorEstudiante = estudiantes[i].nombre;
    }
  }

  return `El estudiante con el mejor promedio es ${mejorEstudiante}.`;
}

module.exports = {
  mejorPromedio,
};
