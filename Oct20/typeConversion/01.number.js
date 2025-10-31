function toNumber(num) {
  return Number(num);
}
console.log(toNumber("42"));
console.log(toNumber("42px"));
console.log(toNumber(""));
console.log(toNumber("null"));
console.log(toNumber(undefined));
console.log(toNumber(true));
console.log(toNumber(false));
