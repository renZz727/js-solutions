const testCases = [
  { expected: "fl", input: ["flower", "flow", "flight"] },
  { expected: "", input: ["dog", "racecar", "car"] },
  { expected: "app", input: ["apple", "app", "application"] },
  { expected: "app", input: ["apple", "app", "app"] },
  { expected: "water", input: ["water", "fall", "waterfall"] },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = longestCommonPrefix(testCase.input);
    let flag = true;

    console.log(testCase.expected, "  ",result);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
function longestCommonPrefix(arr) {
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
  }
  return prefix;
}
