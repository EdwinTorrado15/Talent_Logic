/* Request http Get with only node */

const http = require("http");

const servidor = http.createServer((solicitud, respuesta) => {
  if (solicitud.method === "GET") {
    respuesta.writeHead(200, { "Content-Type": "text/plain" });
    respuesta.write("¡Hola mundo desde el servidor HTTP!");
    respuesta.end();
  }
});

servidor.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000...");
});
