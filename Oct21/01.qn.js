const testCases = [
  { expected: [2, 4, 8, 3, 1, 5], input: [3, 2, 4, 1, 5, 8] },
  { expected: [2, 4, 10, 8, 1], input: [2, 4, 1, 10, 8] },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = parity(testCase.input);
    let flag = true;
    console.log(testCase.expected, " ", result);

    for (let i = 0; i < result.length; i++) {
      if (testCase.expected[i] !== result[i]) flag = false;
    }
    if (flag === true) console.log(`Testcase ${index + 1} passed`);
  });
}

function parity(arr) {
  odd = [];
  even = [];
  arr.forEach((num) => {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  });
  return [...even, ...odd];
}
