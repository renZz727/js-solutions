const testCases = [
  { expected: "olleH dlrow", input: "Hello world" },
  { expected: "sremmargorP era emosewa", input: "Programmers are awesome" },
  { expected: "gnimmargorP si nuf", input: "Programming is fun" },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = wordReverse(testCase.input);

    console.log(testCase.expected, "  ", result);
    if (testCase.expected === result.trim())
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function wordReverse(str) {
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    for (let j = words[i].length - 1; j >= 0; j--) {
      result = result + words[i][j];
    }
    result = result + " ";
  }
  return result;
}
