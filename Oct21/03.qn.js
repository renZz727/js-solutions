const testCases = [
  { expected: 4, input: [1, 2, 3, 5, 6] },
  { expected: 5, input: [3, 4, 6] },
  { expected: 5, input: [4, 6, 7, 8] },
  { expected: 3, input: [2, 4, 5, 6] },
  { expected: "No missing number", input: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { expected: "No missing number", input: [] },
  { expected: false, input: "1, 3, 4, 5, 6" },
  { expected: false, input: "1, 2, 3, 4" },
  { expected: false, input: { 1: 1, 2: 2, 3: 3, 4: 4 } },
  { expected: false, input: {} },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: 12345 },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = missingNumber(testCase.input);
    let flag = true;

    // console.log(typeof testCase.expected, " ", result);
    if (typeof result !== typeof testCase.expected) flag = false;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (result === testCase.expected && flag === true)
        console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function missingNumber(arr) {
  if (!Array.isArray(arr) || arr === null) return false;
  let fullArray = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    fullArray.push(i);
  }
  for (let i = 0; i < fullArray.length; i++) {
    if (fullArray[i] !== arr[i]) return fullArray[i];
  }
  return "No missing number";
}
