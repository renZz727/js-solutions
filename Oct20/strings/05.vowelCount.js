const testCases = [
  { expected: 3, input: "Hello World" },
  { expected: 7, input: "number is a datatype" },
  { expected: 7, input: "boolean values" },
  { expected: 12, input: "javascript is a programming language" },
  { expected: 4, input: "boolean" },
  {
    expected: 3,
    input: "my function",
  },
  { expected: 5, input: "for i in items" },
  { expected: false, input: "" },
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
    const result = vowels(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function vowels(str) {
  if(typeof str !== "string" || str.length === 0) return false;
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      vowelCount++;
  }
  return vowelCount;
}

