class Cuenta {
  constructor() {
    this._saldo = 0;
  }

  ingreso(cantidad) {
    this._saldo += cantidad;
  }

  reintegro(cantidad) {
    this._saldo -= cantidad;
  }

  transferencia(otraCuenta, cantidad) {
    this.reintegro(cantidad);
    otraCuenta.ingreso(cantidad);
  }

  // Getters y setters
  get saldo() {
    return this._saldo;
  }

  set saldo(cantidad) {
    this._saldo = cantidad;
  }
}

const miCuenta = new Cuenta();
miCuenta.saldo = 1000;

const otraCuenta = new Cuenta();
otraCuenta.saldo = 500;

console.log(miCuenta.saldo);
console.log(otraCuenta.saldo);
miCuenta.reintegro(200);
console.log(miCuenta.saldo);

miCuenta.transferencia(otraCuenta, 300);
console.log(miCuenta.saldo);
console.log(otraCuenta.saldo);

otraCuenta.ingreso(100);
console.log(miCuenta.saldo);
console.log(otraCuenta.saldo);
