const testCases = [
  { expected: false, input: 0 },
  { expected: "IV", input: 4 },
  { expected: "X", input: 10 },
  { expected: "XVII", input: 17 },
  { expected: "XCIX", input: 99 },
  { expected: "CCDVI", input: 256 },
  { expected: "MIV", input: 1004 },
  { expected: "MDCCCXCV", input: 1895 },
  { expected: "MMMDDLV", input: 3545 },
  { expected: false, input: { val: 3545 } },
  { expected: false, input: "3545" },
  { expected: false, input: [3545] },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = toRoman(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function toRoman(num) {
  if (typeof num !== "number") return false;
  if (num < 1 || num > 3999) return false;

  const romanNumbers = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "D" },
    { value: 40, symbol: "DL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (const { value, symbol } of romanNumbers) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
