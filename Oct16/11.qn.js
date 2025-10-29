const testCases = [
  { expected: true, input: 16 },
  { expected: false, input: 10 },
  { expected: true, input: 25 },
  { expected: false, input: 14.2 },
  { expected: false, input: 0 },
  { expected: false, input: -25 },
  { expected: false, input: 103 },
  { expected: false, input: "25" },
  { expected: false, input: "" },
  { expected: false, input: { num: 36 } },
  { expected: false, input: {} },
  { expected: false, input: false },
  { expected: false, input: true },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = perfectSquare(testCase.input);
    let flag = true;

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function perfectSquare(num) {
  if (typeof num !== "number" || num === null) return false;
  return num % Math.sqrt(num) === 0;
}
