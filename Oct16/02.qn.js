const testCases = [
  { expected: 2, input: "Hello world" },
  { expected: 5, input: "This is a sample sentence" },
  { expected: 3, input: "Programming is fun" },
  { expected: 1, input: "fun" },
  { expected: 0, input: "" },
  { expected: 0, input: " " },
  { expected: false, input: 53 },
  { expected: false, input: { str: "Programming is fun" } },
  { expected: false, input: {} },
  { expected: false, input: ["hello word", "programming is fun"] },
  { expected: false, input: 53 },
  { expected: false, input: [] },
  { expected: false, input: undefined },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = wordCount(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function wordCount(sentence) {
  if (typeof sentence !== "string") return false;
  if (sentence === "" || sentence === " ") return 0;
  let words = sentence.split(" ");
  return words.length;
}
