class Alumno {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  // Método para actualizar la nota del alumno
  actualizarNota(nuevaNota) {
    return new Alumno(this.nombre, nuevaNota);
  }

  // Método para obtener un mensaje con el resultado de la nota y si ha aprobado o no
  obtenerMensaje() {
    const mensaje = `El alumno ${this.nombre} ha obtenido una nota de ${this.nota}, `;
    if (this.nota >= 5) {
      return mensaje + "ha aprobado.";
    } else {
      return mensaje + "ha suspendido.";
    }
  }

  // Método para imprimir los datos del alumno
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Nota: ${this.nota}`);
  }
}

const alumno = new Alumno("Juan Pérez", 7);

alumno.imprimir();
console.log(alumno.obtenerMensaje());
