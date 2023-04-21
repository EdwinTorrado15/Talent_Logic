const EventEmitter = require("events");
const miEvento = new EventEmitter();

miEvento.on("nuevoUsuario", (usuario) => {
  console.log(
    `Se ha creado un nuevo usuario: ${usuario.nombre} (${usuario.correo})`
  );
});

const nuevoUsuario = {
  nombre: "Juan",
  correo: "juan@example.com",
};
miEvento.emit("nuevoUsuario", nuevoUsuario);
