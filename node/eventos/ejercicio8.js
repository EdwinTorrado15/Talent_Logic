const EventEmitter = require("events");
const miEvento = new EventEmitter();

setTimeout(() => {
  miEvento.emit("miEventoPersonalizado");
}, 5000);

miEvento.on("miEventoPersonalizado", () => {
  console.log("El evento personalizado se emitió después de 5 segundos");
});
