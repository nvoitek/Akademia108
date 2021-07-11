function insertSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j-1] > array[j]) {
      let temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j--;
    }
  }

  return array;
}

let array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(insertSort(array).join())