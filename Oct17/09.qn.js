const testCases = [
  { expected: "aple", input: "apple" },
  { expected: "elphant", input: "elephant" },
  { expected: "floxinhpcat", input: "floxinoxinihilipilification" },
  { expected: "giner", input: "ginger" },
  { expected: "giner", input: "Ginger" },
  { expected: "abc", input: "abc" },
  { expected: "abcd", input: "abc abcd" },
  { expected: "135", input: "13353" },
  { expected: false, input: {value: "Ginger"}},
  { expected: false, input: ["Ginger"] },
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
    const result = duplicateCharacters(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function duplicateCharacters(str) {
    if(typeof str !== "string") return false;
  str = str.toLowerCase().replace(" ", "");
  let duplicates = [];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!duplicates.includes(str[i])) {
      result = result + str[i];
      duplicates += str[i];
    }
  }

  return result;
}
