function insertSort(array) {
  for (let i = 0; i < array.length; i++){
    let min_idx = findMin(array, i);
    let temp = array[i];
    array[i] = array[min_idx];
    array[min_idx] = temp;
  }
}

function findMin(array, startIdx) {
  let min_idx = startIdx;
  let min = array[startIdx];
  for (let i = startIdx + 1; i < array.length; i++ ) {
    if (array[i] < min) {
      min_idx = i;
      min = array[i];
    }
  }
  return min_idx;
}

let array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

insertSort(array);

console.log(array.join());