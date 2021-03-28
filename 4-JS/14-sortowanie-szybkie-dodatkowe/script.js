function quickSort(array) {
  quickSortWithBounds(array, 0, array.length);
}

function quickSortWithBounds(array, lo, hi) {
  // don't sort if nothing is in bounds
  if (lo == hi) {
    return;
  }

  // get pivot (easiest to get last element)
  // here this represents worst case as it is the mallest element
  let pivot_spot = hi - 1;
  let pivot = array[pivot_spot];

  // split array by pivot
  let split_spot = lo;

  for (let i = lo; i < hi; i++) {
    //if element is smaller than pivot move it to the growing left part of the array
    if (array[i] < pivot) {
      let temp = array[split_spot];
      array[split_spot] = array[i];
      array[i] = temp;
      split_spot++;
    }
  }

  // pivot should be the last element in the left array
  let temp = array[split_spot];
  array[split_spot] = array[pivot_spot];
  array[pivot_spot] = temp;

  // quickSort left and right array
  if (lo < hi) {
    quickSortWithBounds(array, lo, split_spot);
    quickSortWithBounds(array, split_spot + 1, hi);
  }
}

let array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

quickSort(array);

console.log(array.join());