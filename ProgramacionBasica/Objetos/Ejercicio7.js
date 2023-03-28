class Agenda {
  constructor() {
    this.contactos = [];
  }

  // Método para añadir un nuevo contacto
  agregarContacto(nombre, telefono, email) {
    this.contactos.push({ nombre, telefono, email });
    console.log(`El contacto ${nombre} ha sido añadido a la agenda.`);
  }

  // Método para listar todos los contactos
  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto) => {
      console.log(
        `- Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}`
      );
    });
  }

  // Método para buscar un contacto por nombre
  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      console.log(
        `- Nombre: ${contactoEncontrado.nombre}, Teléfono: ${contactoEncontrado.telefono}, Email: ${contactoEncontrado.email}`
      );
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}`);
    }
  }

  // Método para editar los datos de un contacto
  editarContacto(nombre, nuevoTelefono, nuevoEmail) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      contactoEncontrado.telefono = nuevoTelefono;
      contactoEncontrado.email = nuevoEmail;
      console.log(`Los datos del contacto ${nombre} han sido actualizados.`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}`);
    }
  }

  // Método para cerrar la agenda
  cerrarAgenda() {
    console.log("La agenda ha sido cerrada.");
  }
}

const agenda = new Agenda();

agenda.agregarContacto("Juan", "555-1234", "juan@example.com");
agenda.agregarContacto("María", "555-5678", "maria@example.com");
agenda.agregarContacto("Pedro", "555-9101", "pedro@example.com");

agenda.listarContactos();

agenda.buscarContacto("María");

agenda.editarContacto("Pedro", "555-1111", "pedro.nuevo@example.com");

agenda.listarContactos();

agenda.cerrarAgenda();
