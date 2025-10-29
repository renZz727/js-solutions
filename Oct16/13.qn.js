const testCases = [
  { expected: "elephant", input: ["cat", "dog", "elephant", "tiger"] },
  { expected: "banana", input: ["apple", "banana", "orange"] },
  { expected: "programming", input: ["programming", "is", "fun"] },
  { expected: "fun", input: ["is", "is", "fun"] },
  { expected: "fun", input: ["fun", "is", "fun"] },
  { expected: false, input: [1, 2, 3, 4, 5] },
  { expected: false, input: [] },
  { expected: false, input: { val1: "fun", val2: "is", val3: "fun" } },
  { expected: false, input: {} },
  { expected: false, input: 123 },
  { expected: false, input: "fun, is, program" },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = longestWord(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function longestWord(arr) {
  if (!Array.isArray(arr) || arr === null) return false;
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") return false;
  }
  const result = arr.sort((b, a) => a.length - b.length);
  return result[0];
}
