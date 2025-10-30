const testCases = [
  { expected: true, input: 153 },
  { expected: true, input: 370 },
  { expected: true, input: 371 },
  { expected: false, input: 21 },
  { expected: false, input: 1002 },
  { expected: true, input: 9474 },
  { expected: true, input: 0 },
  { expected: false, input: -4 },
  { expected: false, input: "-2" },
  { expected: false, input: [153] },
  { expected: false, input: { num: 153 } },
  { expected: false, input: true },
  { expected: false, input: null },
  { expected: false, input: undefined },
  { expected: false, input: "" },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = armstrong(testCase.input);
    let flag = true;

    console.log(testCase.expected, "  ", result);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function armstrong(num) {
  number = "" + num;
  numbers = number.split("");
  let result = 0;
  numbers.forEach((n) => {
    result = result + Math.pow(n, numbers.length);
  });
  return result === num;
}
