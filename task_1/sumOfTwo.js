function sumOfTwo(array1, array2, x) {
  return array1.some(i => array2.some(j => i + j === x))
}
