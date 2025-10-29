const testCases = [
  { expected: "olleH dlrow", input: "Hello world" },
  { expected: "sremmargorP era emosewa", input: "Programmers are awesome" },
  { expected: "gnimmargorP si nuf", input: "Programming is fun" },
  { expected: "gnimmargorP", input: "Programming" },
  { expected: "", input: "" },
  { expected: false, input: ["Programming"] },
  { expected: false, input: [] },
  { expected: false, input: { word: "programming" } },
  { expected: false, input: {} },
  { expected: false, input: undefined },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: null },
  { expected: "Hello world", input: "olleH dlrow" },
  { expected: "h e l l o", input: "h e l l o" },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = wordReverse(testCase.input);

    if (typeof result === "boolean") {
      if (result === testCase.expected)
        console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (testCase.expected === result.trim())
        console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function wordReverse(str) {
  if (typeof str !== "string" || str === null) return false;
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
