function powerOf(base, power) {
  if (power == 0)
    return 1;

  let result = base;
  for (let i = 2; i <= power; i++) {
    result *= base;
  }

  return result;
}

Number.prototype.toPower = function(power) {
    return powerOf(this, power);
}

let nr = 4;

console.log(powerOf(4,3));
console.log(nr.toPower(2));
console.log(Math.pow(2, 3));