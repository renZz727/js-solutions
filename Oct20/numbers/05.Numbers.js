function sumOfDigits(n) {
  digits = ("" + n).split("");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}
console.log(sumOfDigits(193));
