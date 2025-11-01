const testCases = [
  { expected: "fl", input: ["flower", "flow", "flight"] },
  { expected: "", input: ["dog", "racecar", "car"] },
  { expected: "app", input: ["apple", "app", "application"] },
  { expected: "app", input: ["apple", "app", "app"] },
  { expected: "", input: ["water", "fall", "waterfall"] },
  { expected: "", input: ["water", "waterfall", "fall"] },
  { expected: "10", input: ["1001", "10001", "101"] },
  { expected: false, input: `["dog", "racecar", "car"]` },
  { expected: false, input: { str: ["bed", "bent", "bat"] } },
  { expected: false, input: [] },
  { expected: false, input: {} },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = longestCommonPrefix(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
function longestCommonPrefix(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  firstWord = arr[0];
  secondWord = arr[1];
  thirdWord = arr[2];
  let sorted = arr.sort((a, b) => a.length - b.length);
  let shortestWord = sorted[0];
  let prefix = "";
  for (let i = 0; i < shortestWord.length; i++) {
    if (
      shortestWord[i] === firstWord[i] &&
      shortestWord[i] === secondWord[i] &&
      shortestWord[i] === thirdWord[i]
    )
      prefix = prefix + shortestWord[i];
    else if (
      shortestWord[i] !== firstWord[i] ||
      shortestWord[i] !== secondWord[i] ||
      shortestWord[i] !== thirdWord[i]
    )
      return prefix;
  }
  return prefix;
}
