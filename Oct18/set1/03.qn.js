const testCases = [
  { expected: { 1: "a", 2: "b" }, input: { a: 1, b: 2 } },
  {
    expected: { 1: "a", 2: "b", 6: "c", 8: "d" },
    input: { a: 1, b: 2, c: 6, d: 8 },
  },
  { expected: { 1: "a" }, input: { a: 1 } },
  { expected: { a: "1", b: "2", c: "3" }, input: { 1: "a", 2: "b", 3: "c" } },
  { expected: {}, input: {} },
  {
    expected: { toString: "obj" },
    input: { obj: "toString" },
  },
  { expected: false, input: `"a: 1", "b: 2", "c: 3"` },
  { expected: false, input: 275 },
  { expected: false, input: [] },
  { expected: false, input: `"a: 1", "b: 2", "c: 3"` },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
  { expected: false, input: { 1: null } },
  { expected: false, input: { 1: ' ' } },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = invert(testCase.input);
    let flag = true;

    console.log(result);
    if (typeof result !== typeof testCase.expected) flag = false;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      const testExpected = testCase.expected;
      for (let key in testExpected) {
        if (
          !testExpected.hasOwnProperty(key) ||
          result[key] !== testExpected[key]
        )
          flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function invert(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  if (Array.isArray(obj)) return false;
  for (let key in obj) {
    if (obj[key] === null || obj[key] === ' ') return false;
    obj[obj[key]] = key;
    key = obj[key];
    delete obj[obj[key]];
  }
  return obj;
}
