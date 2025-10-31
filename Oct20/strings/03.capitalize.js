const testCases = [
  { expected: "Hello", input: "hello" },
  { expected: "Hello World", input: "hello world" },
  { expected: "Hello World", input: "Hello world" },
  { expected: "Hello World", input: "hello World" },
  { expected: "Hello World", input: "Hello World" },
  {
    expected: "Javascript Is A Programming Language.",
    input: "Javascript is a programming language.",
  },
  { expected: "My Function", input: "my Function" },
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
    const result = capitalize(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function capitalize(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) return false;
  transformed = "";
  words = sentence.split(" ");
  words.map(
    (word) => (transformed += " " + word[0].toUpperCase() + word.slice(1))
  );
  return transformed.trim();
}
