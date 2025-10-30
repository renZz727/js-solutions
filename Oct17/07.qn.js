const testCases = [
  { expected: "my_function", input: "myFunction" },
  { expected: "prime_or_not", input: "primeOrNot" },
  { expected: "prime_or_not", input: "prime_or_not" },
  { expected: "primeornot", input: "primeornot" },
  { expected: "not camel case", input: "PrimeOrNot" },
  { expected: "not camel case", input: "PRIMENO" },
  { expected: "p_r_i_m_e_n_o", input: "pRIMENO" },
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
  if (str === str.toLowerCase()) return str;

  if (str[0] === str[0].toUpperCase()) return "not camel case";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str = str.replace(str[i], "_" + str[i].toLowerCase());
    }
  }
  return str;
}
