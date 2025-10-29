const testCases = [
  { expected: true, input: 7 },
  { expected: false, input: 10 },
  { expected: true, input: 29 },
  { expected: false, input: 0 },
  { expected: false, input: -7 },
  { expected: false, input: -19 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: "21" },
  { expected: false, input: " " },
  { expected: false, input: { num: 21 } },
  { expected: false, input: {} },
  { expected: false, input: [21] },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = isPrime(testCase.input);
    let flag = true;

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function isPrime(num) {
  if (typeof num !== "number") return false;
  if (num < 2) return false;
  for (let i = 0; i <= num; i++) {
    if (num % 2 === 0) return false;
  }
  return true;
}
