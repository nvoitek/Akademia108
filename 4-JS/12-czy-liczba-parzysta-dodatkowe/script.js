function isNrEven(nr) {
  return nr % 2 == 0;
}

Number.prototype.isEven = function() {
  return isNrEven(this);
}

let nr = 14;

console.log(isNrEven(3));
console.log(nr.isEven());