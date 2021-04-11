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

function quickSortWithMemoryReallocation(array) {
  // get pivot
  let left = [];
  let right = [];

  // sort and exit if two elements left
  if (array.length == 2) {
    if (array[0] > array[1]) {
      let temp = array[0];
      array[0] = array[1];
      array[1] = temp;
      return array;
    }
      return array;
  }

  let pivot_spot = Math.floor((array.length)/2);
  let pivot = array[pivot_spot];

  // split array by pivot
  for (let i = 0; i < pivot_spot; i++) {
    let judged_item = array[i];
    if (judged_item < pivot) {
      left.push(judged_item);
    } else {
      right.push(judged_item);
    }
  }

  for (let i = pivot_spot + 1; i < array.length; i++) {
    let judged_item = array[i];
    if (judged_item < pivot) {
      left.push(judged_item);
    } else {
      right.push(judged_item);
    }
  }
  
  left.push(pivot);

  // quickSort left and right array
  if (left.length > 1) {
    left = quickSortWithMemoryReallocation(left);
  }
  if (right.length > 1) {
    right = quickSortWithMemoryReallocation(right);
  }

  return left.concat(right);
}

function quickSortWithMemoryReallocationAndTwoPivots(array) {
  // get pivot
  let left = [];
  let middle = [];
  let right = [];

  // sort and exit if two elements left
  if (array.length == 2) {
    if (array[0] > array[1]) {
      let temp = array[0];
      array[0] = array[1];
      array[1] = temp;
      return array;
    }
      return array;
  }

  let pivot_spot_left = Math.floor((array.length)/3);
  let pivot_left = array[pivot_spot_left];

  let pivot_spot_right = Math.floor(2*(array.length)/3);
  let pivot_right = array[pivot_spot_right];

  if (pivot_left > pivot_right) {
    let temp = pivot_left;
    let temp_spot = pivot_spot_left;

    pivot_left = pivot_right;
    pivot_spot_left = pivot_spot_right;

    pivot_right = temp;
    pivot_spot_right = temp_spot;
  }

  // split array by pivot
  for (let i = 0; i < pivot_spot_left; i++) {
    let judged_item = array[i];
    if (judged_item < pivot_left) {
      left.push(judged_item);
    } else if (judged_item < pivot_right) {
      middle.push(judged_item);
    } else {
      right.push(judged_item);
    }
  }

  for (let i = pivot_spot_left + 1; i < pivot_spot_right; i++) {
    let judged_item = array[i];
    if (judged_item < pivot_left) {
      left.push(judged_item);
    } else if (judged_item < pivot_right) {
      middle.push(judged_item);
    } else {
      right.push(judged_item);
    }
  }

  for (let i = pivot_spot_right + 1; i < array.length; i++) {
    let judged_item = array[i];
    if (judged_item < pivot_left) {
      left.push(judged_item);
    } else if (judged_item < pivot_right) {
      middle.push(judged_item);
    } else {
      right.push(judged_item);
    }
  }
  
  left.push(pivot_left);
  middle.push(pivot_right);

  // quickSort left and right array
  if (left.length > 1) {
    left = quickSortWithMemoryReallocationAndTwoPivots(left);
  }
  if (middle.length > 1) {
    middle = quickSortWithMemoryReallocationAndTwoPivots(middle);
  }
  if (right.length > 1) {
    right = quickSortWithMemoryReallocationAndTwoPivots(right);
  }

  return left.concat(middle).concat(right);
}

let array1 = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

var t0 = performance.now();
quickSort(array1);
var t1 = performance.now();
console.log(array1.join());
console.log("quickSort took " + (t1 - t0) + " milliseconds.")

let array2 = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

var t0 = performance.now();
let sortedArray2 = quickSortWithMemoryReallocation(array2);
var t1 = performance.now();
console.log(sortedArray2.join());
console.log("quickSort with memory reallocation took " + (t1 - t0) + " milliseconds.")

let array3 = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

var t0 = performance.now();
let sortedArray3 = quickSortWithMemoryReallocation(array3);
var t1 = performance.now();
console.log(sortedArray3.join());
console.log("quickSort with memory reallocation and two pivots took " + (t1 - t0) + " milliseconds.")