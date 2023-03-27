const prompt = require("prompt-sync")();

const productos = prompt("Introduce los productos separados por comas: ");

const listaProductos = productos.split(",");

listaProductos.forEach((producto) => {
  console.log(producto.trim());
});
