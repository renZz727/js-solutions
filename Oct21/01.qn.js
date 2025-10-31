const testCases = [
  { expected: [2, 4, 8, 3, 1, 5], input: [3, 2, 4, 1, 5, 8] },
  { expected: [2, 4, 10, 8, 1], input: [2, 4, 1, 10, 8] },
  { expected: [1, 3, 5, 7], input: [1, 3, 5, 7] },
  { expected: [10, 1, 3, 5], input: [1, 3, 5, 10] },
  { expected: [0], input: [0] },
  { expected: [2, 4, 6, 8], input: [2, 4, 6, 8] },
  { expected: false, input: ["2", 4, "6", 8] },
  { expected: [], input: [] },
  { expected: false, input: ["10, 23"] },
  { expected: false, input: ["10"] },
  { expected: false, input: {} },
  { expected: false, input: { num1: 10, num2: 20 } },
  { expected: false, input: { "num1, num2, num3": "2, 5, 7" } },
  { expected: false, input: "1, 3, 5, 7" },
  { expected: false, input: true },
  { expected: false, input: false },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = parity(testCase.input);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      for (let i = 0; i < result.length; i++) {
        if (testCase.expected[i] !== result[i]) flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function parity(arr) {
  if (!Array.isArray(arr)) return false;
  odd = [];
  even = [];
  flag = true;
  arr.forEach((num) => {
    if (typeof num !== "number") flag = false;
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  });
  if (flag === false) return false;
  return [...even, ...odd];
}
