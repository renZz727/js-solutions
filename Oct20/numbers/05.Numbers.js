const testCases = [
  { expected: 6, input: 132 },
  { expected: 2, input: 20 },
  { expected: 1, input: 100 },
  { expected: 10, input: 37 },
  { expected: false, input: { num: 5444 } },
  { expected: false, input: [110] },
  { expected: false, input: [] },
  { expected: false, input: {} },
  { expected: false, input: "" },
  { expected: false, input: ["40"] },
  { expected: false, input: { num: 32 } },
  { expected: false, input: {} },
  { expected: 15, input: 726 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = sumOfDigits(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function sumOfDigits(n) {
  if (typeof n !== "number") return false;
  const digits = ("" + n).split("");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}
