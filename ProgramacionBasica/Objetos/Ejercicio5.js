class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método para mostrar los datos de la persona
  mostrarDatos() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  }

  // Método para verificar si la persona es mayor de edad o no
  esMayorDeEdad() {
    return this.edad >= 18;
  }
}

// Creamos un objeto persona
const persona1 = new Persona("Juan Pérez", 25);

persona1.mostrarDatos();

console.log(persona1.esMayorDeEdad());

const persona2 = new Persona("María Gómez", 16);
persona2.mostrarDatos();

console.log(persona2.esMayorDeEdad());
