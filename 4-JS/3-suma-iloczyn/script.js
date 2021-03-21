function calculateSumAndProduct(arrayToCalculate) {
  let sum = 0;
  let product = 1;

  for (let i of arrayToCalculate) {
    sum += i;
    product *= i;
  }

  console.log(sum);
  console.log(product);
}

let arrayToCalculate = [1, 2, 3, 4, 5, 6];

calculateSumAndProduct(arrayToCalculate);