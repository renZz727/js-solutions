const testCases = [
  { expected: [20, 35, 50], input: [1, 2, 20, 35, 50] },
  { expected: [100, 355, 23, 53], input: [100, 355, 0, 23, 53, 1, 5, 9] },
  { expected: [], input: [0, 1, 2, 3, 4, 5, 6] },
  { expected: [11, 12, 13, 14], input: [10, 11, 12, 13, 14] },
  { expected: false, input: [10, 11, 12, 13, "14"] },
  { expected: [], input: [10] },
  { expected: [], input: [] },
  { expected: false, input: null },
  { expected: false, input: 12 },
  { expected: false, input: "1, 2, 10, 14" },
  { expected: false, input: {} },
  { expected: false, input: { n1: 1, n2: 5, n3: 12, n4: 15 } },
  { expected: false, input: { n1: "1", n2: "5", n3: "12", n4: "15" } },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = myFilter(testCase.input);
    let flag = true;

    if (typeof result !== typeof testCase.expected) flag = false;
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

function myFilter(arr) {
  if (!Array.isArray(arr)) return false;
  const filtered = [];
  let flag = 0;
  arr.forEach((element) => {
    if (typeof element !== "number") flag = 1;
    if (element > 10) filtered.push(element);
  });
  if(flag === 1) return false;
  return filtered;
}
