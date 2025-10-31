const testCases = [
  { expected: 10, input: [1, 2, 3, 4] },
  { expected: 3, input: [1, 2] },
  { expected: 0, input: [0] },
  { expected: 1, input: [-1, 2] },
  { expected: -2, input: [-1, -1] },
  { expected: -20, input: [10, 20, -4, -4, 28, -70] },
  { expected: false, input: [10, "20", -4, -4, "28", -70] },
  { expected: false, input: ["1, 2"] },
  { expected: false, input: ["1", "2"] },
  { expected: false, input: "1, 2, 3, 4, 5" },
  { expected: false, input: 12 },
  { expected: false, input: { nums: "1, 2, 3, 4, 5" } },
  { expected: false, input: {} },
  { expected: 0, input: [] },
  { expected: false, input: 12 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = findSum(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function findSum(num) {
  if (!Array.isArray(num)) return false;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if(typeof num[i] !== "number") return false;
    if (typeof num[i] !== "number") return false;
    sum += num[i];
  }
  return sum;
}
