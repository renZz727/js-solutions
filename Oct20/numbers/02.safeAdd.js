const testCases = [
  { expected: 0.3, a: 0.1, b: 0.2 },
  { expected: 1.0, a: 0.45, b: 0.54 },
  { expected: 0.3, a: 0.11, b: 0.2 },
  { expected: 1.4, a: 0.67, b: 0.77 },
  { expected: 1.3, a: 1.1, b: 0.2 },
  { expected: 1.1, a: 0.1, b: 1 },
  { expected: 10.3, a: 10.1, b: 0.2 },
  { expected: false, a: "10.1", b: 0.2 },
  { expected: false, a: 10.1, b: "0.2 " },
  { expected: false, a: 10.1, b: [0.2] },
  { expected: false, a: 10.1, b: { n: 0.2 } },
  { expected: 10.1, a: 10.1, b: 0 },
  { expected: 3.9, a: 10.1, b: -6.2 },
  { expected: false, a: 10.1, b: true },
  { expected: false, a: false, b: 0.2 },
  { expected: false, a: 10.1, b: null },
  { expected: false, a: 10.1, b: undefined },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = safeAdd(testCase.a, testCase.b);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function safeAdd(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return false;
  return Number((a + b).toFixed(1));
}
