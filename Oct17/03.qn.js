const testCases = [
  {
    expected: {
      name: "JavaScript",
      country: "US",
      dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
    },
    input: {
      name: "JavaScript",
      country: "US",
      dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
    },
  },
  {
    expected: { num1: 470, num2: 340 },
    input: {
      num1: 470,
      num2: 340,
    },
  },
  {
    expected: false,
    input: ["21", 31],
  },
  {
    expected: { val: ["21", 31] },
    input: { val: ["21", 31] },
  },
  {
    expected: false,
    input: 476,
  },
  {
    expected: false,
    input: "476",
  },
  {
    expected: false,
    input: "[476]",
  },
  {
    expected: { num: "{num: 476}" },
    input: { num: "{num: 476}" },
  },
  {
    expected: {
      name: "john",
      age: "32",
    },
    input: {
      details: { name: "Doe", age: 21 },
    },
  },
  {
    expected: {
      name: "john",
      age: 32,
    },
    input: {
      name: "john",
      age: 32,
    },
  },
  {
    expected: { day: "thursday", year: 1990 },
    input: {
      day: "thursday",
      year: 1990,
    },
  },
  {
    expected: false,
    input: true,
  },
  {
    expected: false,
    input: false,
  },
  {
    expected: false,
    input: undefined,
  },
  {
    expected: false,
    input: null,
  },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = objectClone(testCase.input);
    let flag = true;

    if (typeof result !== typeof testCase.expected) flag = false;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      const testExpected = testCase.expected;
      for (let key in testExpected) {
        if (result.hasOwnProperty(key)) {
          if (Array.isArray(testExpected[key])) {
            for (let m = 0; m < testExpected.length; m++) {
              if (testCase.expected[m] !== result[m]) flag = false;
            }
          } else {
            if (testCase.expected[key] !== result[key]) flag = false;
          }
        }
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function objectClone(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  if (Array.isArray(obj) && typeof obj === "object") return false;
  let newObj = {};
  for (item in obj) {
    newObj[item] = obj[item];
  }
  return newObj;
}
