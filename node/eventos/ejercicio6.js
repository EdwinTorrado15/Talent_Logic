const EventEmitter = require('events');
const miEvento = new EventEmitter();

miEvento.on('error', (error) => {
  console.error('Ha ocurrido un error:', error);
});

miEvento.emit('error', new Error('Este es un error personalizado'));
