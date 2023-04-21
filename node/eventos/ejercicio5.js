const EventEmitter = require("events");
const miEvento = new EventEmitter();

const miFuncion = () => {
  console.log("Se ha recibido el evento");
};

miEvento.on("miEvento", miFuncion);

miEvento.removeListener("miEvento", miFuncion);

miEvento.emit("miEvento");
