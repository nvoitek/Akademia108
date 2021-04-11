function fibonacci(nthElement) {
  if (nthElement < 2) {
    return 1;
  }
  else {
    return fibonacci(nthElement - 1) + fibonacci(nthElement - 2);
  }
}

let test = 4;

console.log(fibonacci(test));