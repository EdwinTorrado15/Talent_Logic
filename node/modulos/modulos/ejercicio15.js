function esPrimo(n) {
  if (n <= 1) {
    return false;
  }
  const sqrtN = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function numerosPrimos(n) {
  const result = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo(i)) {
      result.push(i);
    }
  }
  return result;
}

module.exports = {
    numerosPrimos: numerosPrimos,
};
