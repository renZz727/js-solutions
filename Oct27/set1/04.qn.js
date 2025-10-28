const testCases = [
  {
    expected: { a: 1, b: 3, c: 4 },
    input: { obj1: { a: 1, b: 2 }, obj2: { b: 3, c: 4 } },
  },
  {
    expected: { a: 1, b: 2, c: 1 },
    input: { obj1: { b: 3, c: 1 }, obj2: { a: 1 } },
  },
  {
    expected: false,
    input: { obj1: [], obj2: { a: 1 } },
  },
  {
    expected: false,
    input: { obj1: { b: 3, c: 1 }, obj2: [] },
  },
  {
    expected: false,
    input: { obj1: [], obj2: [] },
  },
  {
    expected: false,
    input: { obj1: "a: 1, b: 2", obj2: [] },
  },
  {
    expected: false,
    input: { obj1: { b: 3, c: 1 }, obj2: "a: 2, c: 4" },
  },
  {
    expected: false,
    input: { obj1: 0, obj2: [] },
  },
  {
    expected: false,
    input: { obj1: { b: 3, c: 1 }, obj2: true },
  },
  {
    expected: false,
    input: { obj1: false, obj2: [] },
  },
  {
    expected: false,
    input: { obj1: { b: 3, c: 1 }, obj2: [] },
  },
  {
    expected: false,
    input: { obj1: -1, obj2: "a: 1" },
  },
  {
    expected: false,
    input: { obj1: { b: 3, c: 1 }, obj2: -10 },
  },
  {
    expected: false,
    input: { obj1: "{ b: 3, c: 1 }", obj2: -10 },
  },
  {
    expected: false,
    input: { obj1: "{ b: 3, c: 1 }", obj2: "[]" },
  },
];

function combineObject(obj1, obj2) {
  if (typeof obj1 !== "object") return false;
  const newObj = new Object();
  for (key in obj1) newObj[key] = obj1[key];
  for (key in obj2) newObj[key] = obj2[key];
  return newObj;
}

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = combineObject(testCase.input.obj1, testCase.input.obj2);

    let flag = true;
    for (let key in testCase.expected) {
      if (!result.hasOwnProperty(key) || result[key] !== result[key])
        flag = false;
    }
    if (flag === true) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
