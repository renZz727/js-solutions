test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = passwordChecker(testCase.input);
    let flag = true;

    // console.log(testCase.expected, "  ",result);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
