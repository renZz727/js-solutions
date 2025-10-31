function createCounter() {
  let count = 0;
  function counter() {
    count++;
    console.log(count);
  }
  return counter;
}
let count = createCounter();
count();
count();
count();

// or
// let count = 0;
// function createCounter() {
//   count++;
//   console.log(count);
// }
// createCounter();
// createCounter();
