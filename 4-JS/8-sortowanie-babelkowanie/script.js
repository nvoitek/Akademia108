function bubbleSort(arrayToSort) {
  let sortedArray = arrayToSort;

  for (let n = 0; n < sortedArray.length - 1; n++) {
    for (let i = 0; i < sortedArray.length - 1; i++) {
      let smaller = sortedArray[i];
      let bigger = sortedArray[i+1];
      if (smaller > bigger) {
        let temp = smaller;
        sortedArray[i] = bigger;
        sortedArray[i+1] = temp;
      }
    }
  }

  return sortedArray;
}

let arrayToSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(bubbleSort(arrayToSort).join());