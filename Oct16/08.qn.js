const testCases = [
  { expected: 4, input: [1, 2, 3, 5, 6] },
  { expected: 12, input: [10, 11, 13, 14, 15] },
  { expected: 1, input: [2, 3, 4, 5, 6] },
  { expected: 1, input: [-3, -2, -1, 0, 2] },
  { expected: false, input: [-3, -2, "-1", 0, 2] },
  { expected: 0, input: [4, 3, 2, 1] },
  { expected: "invalid", input: [2, 5, 6] },
  { expected: false, input: [] },
  { expected: false, input: { n: 1, m: 3, o: 4 } },
  { expected: false, input: 44 },
  { expected: false, input: "[-3, -2, -1, 0, 2]" },
  { expected: false, input: "-3, -2, -1, 0, 2" },
  { expected: false, input: false },
  { expected: false, input: true },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = missingNumber(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function missingNumber(arr) {
  if (!Array.isArray(arr) || arr === null || arr.length === 0) return false;
  arr.sort();
  let fullArray = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (typeof i !== "number") return false;
    fullArray.push(i);
  }
  let missing = null;
  let count = 0;
  for (let i = 0; i < fullArray.length; i++) {
    if (!arr.includes(fullArray[i])) {
      missing = fullArray[i];
      count++;
    }
  }
  if (count === 1) return missing;
  else if (count > 1) return "invalid";

  return arr[0] - 1;
}
