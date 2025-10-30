const testCases = [
  { expected: "my-function", input: "myFunction" },
  { expected: "prime-or-not", input: "primeOrNot" },
  { expected: "prime-or-not", input: "prime-or-not" },
  { expected: "primeornot", input: "primeornot" },
  { expected: "not camel-case", input: "prime_or_not" },
  { expected: "not camel-case", input: "PrimeOrNot" },
  { expected: "not camel-case", input: "PRIMENO" },
  { expected: "p-r-i-m-e-n-o", input: "pRIMENO" },
  { expected: "", input: "" },
  { expected: false, input: ["myFunction"] },
  { expected: false, input: { camelCase: "myFunction" } },
  { expected: false, input: {} },
  { expected: false, input: 726 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = convertToSnakeCase(testCase.input);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function convertToSnakeCase(str) {
  if (typeof str !== "string") return false;
  const chars = [...str];
  if (chars.includes("_")) return "not camel-case";
  if (str === str.toLowerCase()) return str;
  if (str[0] === str[0].toUpperCase()) return "not camel-case";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str = str.replace(str[i], "-" + str[i].toLowerCase());
    }
  }
  return str;
}
