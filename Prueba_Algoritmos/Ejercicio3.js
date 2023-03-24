const numIntervalo = (n) => {
  let contador = 1;
  let intervalo = setInterval(() => {
    console.log(contador);
    contador++;
    if (contador > n) {
      clearInterval(intervalo);
    }
  }, 1000);
};

numIntervalo(10);
