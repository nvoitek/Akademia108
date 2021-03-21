function calculateSumOfSquares(arrayToCalculate) {
  let sum = 0;

  for (let i of arrayToCalculate) {
    sum += i*i;
  }

  return sum;
}

let arrayToCalculate = [0, 1, 2, 3, 4, 5];

console.log(calculateSumOfSquares(arrayToCalculate));