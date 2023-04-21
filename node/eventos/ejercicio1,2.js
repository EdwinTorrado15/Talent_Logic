const EventEmitter = require('events');
const miEvento = new EventEmitter();

// Escuchar el evento personalizado
miEvento.on('miEventoPersonalizado', () => {
  console.log('El evento personalizado se ha emitido');
});

// Emitir el evento personalizado
miEvento.emit('miEventoPersonalizado');
