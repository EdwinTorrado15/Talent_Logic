export const carritoTotal = (carrito) => {
  return carrito.reduce((total, producto) => total + producto.precio, 0);
};

export const carritoTotalDescuento = (carrito) => {
  return carrito.reduce((total, producto) => {
    let precioProducto = producto.precio;
    if (producto.estado === "con_descuento" && producto.descuento) {
      const descuentoDecimal = producto.descuento / 100;
      const descuento = producto.precio * descuentoDecimal;
      precioProducto = producto.precio - descuento;
    }
    const subtotal = precioProducto * producto.cantidad;
    return total + subtotal;
  }, 0);
};

