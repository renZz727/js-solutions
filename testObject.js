if (typeof result !== typeof testCase.expected) flag = false;
if (typeof result === "boolean") {
  if (result === testCase.expected) {
    console.log(`Testcase ${index + 1} passed`);
  } else console.log(`Testcase ${index + 1} failed`);
} else {
  const testExpected = testCase.expected;
  for (let key in testExpected) {
    if (!testExpected.hasOwnProperty(key) || result[key] !== testExpected[key])
      flag = false;
  }
  if (flag === true) console.log(`Testcase ${index + 1} passed`);
  else console.log(`Testcase ${index + 1} failed`);
}
