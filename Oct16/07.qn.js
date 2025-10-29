const testCases = [
  { expected: ["programming"], input: "Hello world of programming" },
  {
    expected: ["quick", "brown", "jumps"],
    input: "The quick brown foxx jumps over the lazy dog",
  },
  { expected: ["coding"], input: "I love coding" },
  { expected: ["orange"], input: "orange" },
  { expected: ["a"], input: "a" },
  { expected: [], input: " " },
  { expected: [], input: "" },
  { expected: false, input: { str: "I love coding" } },
  { expected: false, input: {} },
  { expected: false, input: 1234 },
  { expected: false, input: [] },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = longestWord(testCase.input);
    let flag = true;

    if (typeof result !== typeof testCase.expected) flag = false;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      for (let i = 0; i < result.length; i++) {
        if (testCase.expected[i] !== result[i]) flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function longestWord(sentence) {
  if (typeof sentence !== "string" || sentence === null) return false;
  words = sentence.split(" ");
  words.sort((a, b) => a.length - b.length);
  const len = words[words.length - 1].length;
  const result = words.filter((word) => {
    if (word.length === len) return word;
    else return;
  });
  return result;
}
