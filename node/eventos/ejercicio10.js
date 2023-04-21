const os = require('os');

setInterval(() => {
  const promedioCarga = os.loadavg()[0];
  if (promedioCarga > 1.0) {
    console.log('La carga del sistema es alta. Tomando medidas...');
  }
}, 5000);
