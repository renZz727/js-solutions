function validNumber(num) {
  if (num === NaN || num === Infinity || num === undefined) return true;
  else return false;
}

let unDefined;
console.log(validNumber(5));
console.log(validNumber(null));
