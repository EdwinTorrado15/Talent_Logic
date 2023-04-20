function mediana(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const n = sortedArr.length;
  const middleIndex = Math.floor(n / 2);
  if (n % 2 === 0) {
    return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
  }
  return sortedArr[middleIndex];
}

module.exports = {
    mediana: mediana,
};
