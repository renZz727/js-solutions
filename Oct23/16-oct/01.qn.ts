function isPrime(num : number) : boolean{
  if (num < 2) return false;
  for (let i = 0; i <= num; i++) {
    if (num % 2 === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(29));
