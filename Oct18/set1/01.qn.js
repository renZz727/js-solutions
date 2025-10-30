const testCases = [
  { expected: [1, 2, 3, 4, 5], input: [1, 2, 3, 4, 5] },
  { expected: [1, 2, 5], input: [1, [2, 5]] },
  { expected: [1, 2, 3, 4, 5], input: [1, [2, [3, [4]], 5]] },
  { expected: [1, 2, 3, 5], input: [1, [2, [3, []], 5]] },
  { expected: [1, 5], input: [1, [[], [[], []], 5]] },
  { expected: [], input: [] },
  { expected: [], input: [[], [[], [[], []], []]] },
  { expected: [1], input: [1] },
  { expected: false, input: { arr: [1, 3, 4] } },
  { expected: false, input: {} },
  { expected: false, input: "[1, 3, [4, 5, [4]], 8]" },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    newArr = [];
    const result = flattenArray(testCase.input);

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

function flattenArray(arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") flattenArray(arr[i]);
    else newArr.push(arr[i]);
  }
  return newArr;
}
