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
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = objectClone(testCase.input);
    let flag = true;

    console.log(testCase.expected, "  ", result);
    if (typeof result !== typeof testCase.expected) flag = false;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      console.log("sd");
      const testExpected = testCase.expected;
      for (let key in testExpected) {
        if (
          !testExpected.hasOwnProperty(key) ||
          result[key] !== testExpected[key]
        )
          console.log(result[key] === testExpected[key]);
        flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function objectClone(obj) {
  let newObj = {};
  for (item in obj) {
    newObj[item] = obj[item];
  }
  return newObj;
}

// console.log(
//   objectClone({
//     name: "JavaScript",
//     country: "US",
//     dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
//   })
// );
// console.log(
//   objectClone({
//     name: "John",
//     employee: true,
//   })
// );
