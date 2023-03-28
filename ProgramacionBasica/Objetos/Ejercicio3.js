class Cuenta {
  constructor(titular, cantidad = 0) {
    this._titular = titular;
    this._cantidad = cantidad;
  }

  // Getters y setters
  get titular() {
    return this._titular;
  }

  set titular(nuevoTitular) {
    this._titular = nuevoTitular;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(nuevaCantidad) {
    this._cantidad = nuevaCantidad;
  }

  toString() {
    return `Cuenta de ${this._titular} con ${this._cantidad} euros`;
  }

  ingresar(cantidad) {
    if (cantidad > 0) {
      this._cantidad += cantidad;
    }
  }

  retirar(cantidad) {
    const cantidadFinal = this._cantidad - cantidad;
    this._cantidad = cantidadFinal >= 0 ? cantidadFinal : 0;
  }
}

const miCuenta = new Cuenta("Juan Pérez", 500);
console.log(miCuenta.toString());

miCuenta.ingresar(100);
console.log(miCuenta.toString());

miCuenta.retirar(200);
console.log(miCuenta.toString());

miCuenta.retirar(500);
console.log(miCuenta.toString());
