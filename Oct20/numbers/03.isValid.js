const num = Math.pow(10, 1000);
const testCases = [
  { expected: true, input: 10 },
  { expected: true, input: 20 },
  { expected: false, input: num },
  { expected: false, input: "10" },
  { expected: false, input: { num: 5444 } },
  { expected: false, input: [110] },
  { expected: false, input: [] },
  { expected: false, input: {} },
  { expected: false, input: "" },
  { expected: false, input: ["40"] },
  { expected: false, input: { num: 32 } },
  { expected: false, input: {} },
  { expected: true, input: 726 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = isValid(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function isValid(num) {
  if (typeof num !== "number") return false;
  return isFinite(num);
}
