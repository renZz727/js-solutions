function findSum(...num :number[]) {
  return num.reduce((sum, n) => (sum += n), 0);
}
console.log(findSum(1, 2, 3, 4));
console.log(findSum(1, 2));
