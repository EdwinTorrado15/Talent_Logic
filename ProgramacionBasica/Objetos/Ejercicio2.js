class Contador {
  constructor() {
    this._valor = 0;
  }

  incrementar() {
    this._valor++;
  }

  decrementar() {
    this._valor--;
  }

  // Getters y setters
  get valor() {
    return this._valor;
  }

  set valor(nuevoValor) {
    this._valor = nuevoValor;
  }
}

const miContador = new Contador();
console.log(miContador.valor);

miContador.incrementar();
miContador.incrementar();
console.log(miContador.valor);

miContador.decrementar();
console.log(miContador.valor);

miContador.valor = 5;
console.log(miContador.valor);
