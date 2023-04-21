const { Readable } = require("stream");

const miLectura = new Readable({
  read(size) {
    // Emitir el evento de datos
    this.push("Esto es una cadena de datos");
    // Finalizar la lectura
    this.push(null);
  },
});

// Escuchar el evento de datos
miLectura.on("data", (datos) => {
  console.log("Datos recibidos:", datos.toString());
});
