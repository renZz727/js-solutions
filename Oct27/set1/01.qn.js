const testCases = [
  { expected: 106, input: { billAmount: 100, taxPercentage: 6 } },
  { expected: 1080, input: { billAmount: 1000, taxPercentage: 8 } },
  { expected: 2760, input: { billAmount: 2400, taxPercentage: 15 } },
  { expected: 492, input: { billAmount: 400, taxPercentage: 23 } },
  { expected: 2760, input: { billAmount: 2400, taxPercentage: 15 } },
  { expected: 306.8, input: { billAmount: 260, taxPercentage: 18 } },
  { expected: 1269.2, input: { billAmount: 760, taxPercentage: 67 } },
  { expected: 2.06, input: { billAmount: 2, taxPercentage: 3 } },
  {
    expected: "negative values",
    input: { billAmount: -2400, taxPercentage: 15 },
  },
  {
    expected: "negative values",
    input: { billAmount: 2400, taxPercentage: -17 },
  },
  { expected: 0, input: { billAmount: 0, taxPercentage: 0 } },
  { expected: 6800, input: { billAmount: 6800, taxPercentage: 0 } },
  { expected: 0, input: { billAmount: 0, taxPercentage: 15 } },
  {
    expected: "not a number",
    input: { billAmount: 2400, taxPercentage: "15" },
  },
  { expected: "not a number", input: { billAmount: "123", taxPercentage: 15 } },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = calculateTotal(
      testCase.input.billAmount,
      testCase.input.taxPercentage
    );

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function calculateTotal(billAmount, taxPercentage = 20) {
  if (typeof billAmount !== "number" || typeof taxPercentage !== "number")
    return "not a number";
  else if (billAmount < 0 || taxPercentage < 0) return "negative values";
  return billAmount * ((100 + taxPercentage) / 100);
}
