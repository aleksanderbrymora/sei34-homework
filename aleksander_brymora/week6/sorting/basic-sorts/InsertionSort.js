function insertionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let x = arr[j-1];
      arr[j-1] = arr[j];
      arr[j] = x;
      j--;
    }
  }
  return arr;
}

module.exports = insertionSort;
