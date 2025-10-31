function isValid(num) {
  maxValue = Math.pow(10, 1000);
  if (num < maxValue + 1) return "valid number";
  else return "invalid number";
}

num = Math.pow(10, 1000);
console.log(isValid(100));
console.log(isValid(num));
