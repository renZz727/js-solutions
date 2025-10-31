const testCases = [
  { expected: "hello,world", input: " Hello, World! " },
  { expected: "primeornot", input: "primeOrNot" },
  { expected: "prime-or-not", input: "prime-or-not" },
  { expected: "primeornot", input: "primeornot" },
  { expected: "prime_or_not", input: "prime_or_not !" },
  { expected: "abc", input: "a!b !c! " },
  { expected: "primeno", input: "PRIMENO" },
  { expected: "primeno", input: "pRIMENO" },
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
    const result = format(testCase.input);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function format(str) {
  if(typeof str !== "string") return false;
  str = str.toLowerCase().replaceAll("!", "");
  return str.replaceAll(" ", "");
}
