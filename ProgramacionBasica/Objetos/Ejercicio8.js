const prompt = require("prompt-sync")();

class Calculadora {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sumar() {
    return this.a + this.b;
  }

  restar() {
    return this.a - this.b;
  }

  multiplicar() {
    return this.a * this.b;
  }

  dividir() {
    if (this.b === 0) {
      return "Error: No se puede dividir entre cero";
    }
    return this.a / this.b;
  }
}

// Ejemplo de uso
const a = parseInt(prompt("Ingrese el primer número"));
const b = parseInt(prompt("Ingrese el segundo número"));

const calculadora = new Calculadora(a, b);

console.log(`La suma es: ${calculadora.sumar()}`);
console.log(`La resta es: ${calculadora.restar()}`);
console.log(`La multiplicación es: ${calculadora.multiplicar()}`);
console.log(`La división es: ${calculadora.dividir()}`);
