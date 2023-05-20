export const carritoTotal = (carrito) => {
  return carrito.reduce((total, producto) => total + producto.precio, 0);
};
