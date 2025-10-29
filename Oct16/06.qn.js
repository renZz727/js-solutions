const testCases = [
  { expected: 18, input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { expected: 30, input: [10, 20, 30, 40, 50] },
  { expected: 60, input: [15, 25, 35, 45, 55] },
  { expected: 21, input: [3, 6, 9, 3] },
  { expected: 0, input: [2, 4, 8, 10] },
  { expected: -9, input: [-10, -3, -2, -6] },
  { expected: 0, input: [-3, 3, 6, -6] },
  { expected: 0, input: [] },
  { expected: false, input: { n1: 3, n2: 4, n3: 6 } },
  { expected: false, input: {} },
  { expected: 0, input: [-3, 3, 6, -6] },
  { expected: false, input: 3 },
  { expected: false, input: undefined },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = sumOfNumbers(testCase.input);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function sumOfNumbers(arr) {
  if (!Array.isArray(arr)) return false;
  const result = arr.reduce((count, num) => {
    if (num % 3 == 0) return count + num;
    else {
      return count;
    }
  }, 0);
  return result;
}
