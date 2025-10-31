function findSum(arr: number[][]): number {
  let sum = "";
  let total = 0;
  arr.forEach((element) => {
    let sum: string = "";
    element.forEach((ele) => {
      sum = sum + String(ele);
    });
    total = total + Number(sum);
  });
  return total;
}
const numbers: number[][] = [
  [1, 2, 3],
  [0, 7],
];
console.log(findSum(numbers));
