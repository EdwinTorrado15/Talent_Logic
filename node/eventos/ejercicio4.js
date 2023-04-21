const EventEmitter = require('events');
const miEvento = new EventEmitter();

miEvento.once('nuevoMensaje', () => {
  console.log('Se ha recibido un nuevo mensaje');
});

miEvento.emit('nuevoMensaje');

miEvento.emit('nuevoMensaje');
