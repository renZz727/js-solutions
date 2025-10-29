const testCases = [
  { expected: 24, input: [1, 2, 3, 4] },
  { expected: 0, input: [-4, -3, -2, -1, 0] },
  { expected: -6, input: [-1, -2, -3, -4, -5] },
  { expected: -3, input: [1, 3, -1] },
  { expected: false, input: [-1, -2] },
  { expected: false, input: [0] },
  { expected: false, input: [-1] },
  { expected: false, input: ["1", "2", "3"] },
  { expected: false, input: [{ 1: 1 }, { 2: 2 }, { 3: 3 }] },
  { expected: false, input: { n1: 1, n2: 2, n3: 3 } },
  { expected: false, input: [] },
  { expected: false, input: {} },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = maximumProduct(testCase.input);
    let flag = true;

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function maximumProduct(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length < 3 || arr === null) return false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return false;
  }
  const result = arr.sort((b, a) => a - b);
  return result[0] * result[1] * result[2];
}
