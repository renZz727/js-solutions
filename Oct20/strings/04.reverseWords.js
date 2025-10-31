const testCases = [
  { expected: "World Hello", input: "Hello World" },
  { expected: "datatype a is number", input: "number is a datatype" },
  { expected: "values boolean", input: "boolean values" },
  { expected: "language programming a is javascript", input: "javascript is a programming language" },
  { expected: "boolean", input: "boolean" },
  {
    expected: "function my",
    input: "my function",
  },
  { expected: "items in i for", input: "for i in items" },
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
    const result = reverseWords(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function reverseWords(sentence) {
  if(typeof sentence !== "string" || sentence.length === 0) return false;
  words = sentence.split(" ");
  result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i] + " ";
  }
  return result.trim();
}

