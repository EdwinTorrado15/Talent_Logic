const prompt = require("prompt-sync")();

// Función para obtener el número de teléfono sin prefijo ni extensión
const obtenerNumeroTelefono = (telefono) =>
  telefono.replace("+34-", "").replace(/-\d{2}$/, "");

// Pedir el número de teléfono al usuario
const telefono = prompt(
  "Introduce tu número de teléfono con formato +57-número-extension: "
);

// Obtener el número de teléfono sin prefijo ni extensión
const numeroTelefono = obtenerNumeroTelefono(telefono);

// Mostrar el número de teléfono sin prefijo ni extensión
console.log(
  `Tu número de teléfono sin prefijo ni extensión es: ${numeroTelefono}`
);
