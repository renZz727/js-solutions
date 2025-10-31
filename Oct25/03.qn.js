function myMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) result[i] = findSquare(arr[i]);
  return result;
}

function myFilter(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i])) result.push(arr[i]);
  return result;
}

function myReduce(arr, fn, initialValue) {
  let result = initialValue;
  for (let i = 0; i < arr.length; i++) result = findSum(arr[i], result);
  return result;
}

function findSquare(num) {
  return Math.pow(num, 2);
}
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 0; i <= num; i++) {
    if (num % 2 === 0) return false;
  }
  return true;
}
function findSum(num, sum) {
  return num + sum;
}

const numbers = [1, 2, 3, 4, 5, 6];
const primeNumbers = myFilter(numbers, isPrime);
const squares = myMap(numbers, findSquare);
const sum = myReduce(numbers, findSum, 0);
console.log(primeNumbers);
console.log(squares);
console.log(sum);
