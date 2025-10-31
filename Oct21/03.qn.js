const testCases = [
  { expected: 4, input: [1, 2, 3, 5, 6] },
  { expected: 2, input: [1, 3, 4, 5, 6] },
  { expected: false, input: [1, 2, 4, 6, 7, 8] },
  { expected: "no missing number", input: [1, 2, 3, 4, 5, 6, 7] },
  { expected: false, input: [1, 2, 3, 7, 8, 9] },
  { expected: false, input: [1, 2, 3, 5, 8] },
  { expected: false, input: [] },
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
  let missing = [];
  let count = 0;

  for (let i = 0; i < fullArray.length; i++) {
    if (!arr.includes(fullArray[i])) {
      missing = fullArray[i];
      count++;
    }
  }
  if (count > 1) return false;
  else if (count === 1) return missing;
  
  return "no missing number";

}
