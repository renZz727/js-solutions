const testCases = [
  { expected: "$10", input: 4 },
  { expected: "$20", input: 24 },
  { expected: "$15", input: 73 },
  { expected: false, input: -73 },
  { expected: false, input: 0 },
  { expected: false, input: "43" },
  { expected: false, input: "old" },
  { expected: false, input: "child" },
  { expected: "$10", input: 12 },
  { expected: "$20", input: 59 },
  { expected: "$15", input: 100 },
  { expected: false, input: -1 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: "error" },
];
function getTicketPrice(age) {
  if (typeof age !== "number" || age <= 0) return false;
  else {
    if (age <= 12) return "$10";
    else if (age <= 59) return "$20";
    else return "$15";
  }
}

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = getTicketPrice(testCase.input, testCase.input);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
