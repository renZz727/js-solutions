const testCases = [
  { expected: ["C", "CA", "CAT", "AT", "T"], input: "CAT" },
  {
    expected: ["W", "WA", "WAT", "WATE", "WATER", "ATER", "TER", "ER", "R"],
    input: "WATER",
  },
  { expected: ["A", "AN", "ANA", "NA", "A"], input: "ANA" },
  { expected: ["A", "AN", "N"], input: "AN" },
  { expected: ["A"], input: "A" },
  { expected: false, input: ["CAT"] },
  { expected: false, input: { word: "A" } },
  { expected: false, input: [] },
  { expected: false, input: {} },
  { expected: false, input: "274" },
  { expected: false, input: "ANNA ANNA" },
  { expected: false, input: 124 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = pattern(testCase.input);

    let flag = true;

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

function pattern(str) {
  if (typeof str !== "string" || str.includes(" ")) return false;
  result = "";
  let copy = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) return false;
    result += str[i];
    copy.push(result);
  }
  for (let i = 1; i < str.length; i++) {
    copy.push(str.substring(i, str.length));
  }
  return copy;
}
