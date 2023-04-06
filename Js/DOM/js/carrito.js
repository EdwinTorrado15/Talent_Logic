import "../dist/output.css";

const tablaCarrito = document.querySelector("#table-carrito");

const calcularCostoTotal = () => {
  let costoTotal = 0;
  carrito.forEach((producto) => {
    costoTotal += parseFloat(producto.precio);
  });
  return costoTotal;
};

tablaCarrito.innerHTML = `
<table class="w-full">
  <thead>
    <tr class="bg-gray-300">
      <th class="p-2">ID</th>
      <th class="p-2">Nombre</th>
      <th class="p-2">Tipo</th>
      <th class="p-2">Año</th>
      <th class="p-2">Precio</th>
      <th class="p-2">Acciones</th>
    </tr>
  </thead>
  <tbody class="text-center">
  </tbody>
</table>
`;

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const actualizarTablaCarrito = () => {
  tablaCarrito.querySelector("tbody").innerHTML = "";

  carrito.forEach((producto) => {
    const fila = document.createElement("tr");
    const formatedPrecio = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(producto.precio);
    fila.innerHTML = `
      <td class="p-2">${producto.id}</td>
      <td class="p-2">${producto.nombre}</td>
      <td class="p-2">${producto.tipo}</td>
      <td class="p-2">${producto.anio}</td>
      <td class="p-2">${formatedPrecio}</td>
      <td class="p-2">
        <button id="delete-button" class="bg-rojo text-white rounded-md px-3">Eliminar</button>
      </td>
    `;
    tablaCarrito.querySelector("tbody").appendChild(fila);
    const botonEliminar = fila.querySelector("#delete-button");
    botonEliminar.addEventListener("click", () => {
      const index = carrito.findIndex((p) => p.id === producto.id);
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarTablaCarrito();
    });
  });

  const costoTotal = calcularCostoTotal();
  const formatoMoneda = "es-CO";
  const costoTotalMoneda = costoTotal.toLocaleString(formatoMoneda, {
    style: "currency",
    currency: "COP",
  });
  const filaTotal = document.createElement("tr");
  filaTotal.innerHTML = `
    <td colspan="4" class="p-2 bg-gray-300">Costo total:</td>
    <td class="p-2 bg-gray-300">${costoTotalMoneda}</td>
    <td class="p-2 bg-gray-300"></td>
  `;
  tablaCarrito.querySelector("tbody").appendChild(filaTotal);
};

actualizarTablaCarrito();
