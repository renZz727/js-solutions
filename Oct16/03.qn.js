const testCases = [
  { expected: [2, 4, 6], input: [1, 2, 3, 4, 5, 6] },
  { expected: [8, 10, 12], input: [7, 8, 9, 10, 11, 12] },
  { expected: [2, 4, 6, 8, 10], input: [2, 4, 6, 8, 10] },
  { expected: [], input: [1, 3, 5, 7, 9] },
  { expected: [], input: [1, 3, 5, 7, 9] },
  { expected: [0], input: [0] },
  { expected: [], input: [] },
  { expected: false, input: { n1: 1, n2: 2, n3: 3, n4: 4 } },
  { expected: false, input: {} },
  { expected: false, input: 10 },
  { expected: false, input: "[1, 3, 5, 7, 9]" },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = evenNumbers(testCase.input);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      for (let i = 0; i < testCase.expected.length; i++) {
        if (testCase.expected[i] !== result[i]) flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function evenNumbers(arr) {
  if (!Array.isArray(arr) || arr === null) return false;
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenNumbers.push(arr[i]);
  }
  return evenNumbers;
}
