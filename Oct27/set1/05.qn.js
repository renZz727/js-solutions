const testCases = [
  { expected: true, input: { obj1: { a: 1, b: 2 }, obj2: { a: 1, b: 2 } } },
  { expected: false, input: { obj1: { a: 1, b: 2 }, obj2: { a: 3, b: 4 } } },
  { expected: false, input: { obj1: { a: 1, b: 2 }, obj2: { a: 3 } } },
  { expected: false, input: { obj1: { a: 1 }, obj2: { b: 3, c: 4 } } },
  { expected: true, input: { obj1: { b: 2 }, obj2: { b: 2 } } },
  { expected: false, input: { obj1: "{ b: 2 }", obj2: { b: 2 } } },
  { expected: false, input: { obj1: { b: 2 }, obj2: "{ b: 2 }" } },
  { expected: false, input: { obj1: "{ b: 2 }", obj2: "{ b: 2 }" } },
  { expected: false, input: { obj1: { b: 2 }, obj2: ["b: 2"] } },
  { expected: false, input: { obj1: { a: 2 }, obj2: [1, 3, 3] } },
  { expected: false, input: { obj1: [{ k: 2 }], obj2: ["b: 2"] } },
  { expected: false, input: { obj1: 1234, obj2: ["b: 2"] } },
  { expected: false, input: { obj1: undefined, obj2: { b: 2 } } },
  { expected: false, input: { obj1: null, obj2: undefined } },
  { expected: false, input: { obj1: null, obj2: null } },
];

function objectEquality(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) return false;
  }
  return true;
}

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = objectEquality(testCase.input.obj1, testCase.input.obj2);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
