class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  // Método para obtener el lado con mayor tamaño
  obtenerLadoMayor() {
    if (this.lado1 >= this.lado2 && this.lado1 >= this.lado3) {
      return this.lado1;
    } else if (this.lado2 >= this.lado1 && this.lado2 >= this.lado3) {
      return this.lado2;
    } else {
      return this.lado3;
    }
  }

  // Método para obtener el tipo de triángulo
  obtenerTipoTriangulo() {
    if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
      return "equilátero";
    } else if (
      this.lado1 === this.lado2 ||
      this.lado1 === this.lado3 ||
      this.lado2 === this.lado3
    ) {
      return "isósceles";
    } else {
      return "escaleno";
    }
  }

  // Método para imprimir el lado mayor y el tipo de triángulo
  imprimir() {
    console.log(`Lado mayor: ${this.obtenerLadoMayor()}`);
    console.log(`Tipo de triángulo: ${this.obtenerTipoTriangulo()}`);
  }
}

const triangulo = new Triangulo(3, 4, 5);
triangulo.imprimir();
