const testCases = [
  { expected: "#ffa500", input: [255, 165, 0] },
  { expected: "#000a14", input: [0, 10, 20] },
  { expected: "#0a2e17", input: [10, 46, 23] },
  { expected: "#19a500", input: [25, 165, 0] },
  { expected: "#00bfff", input: [0, 191, 255] },
  { expected: "#00b537", input: [0, 181, 55] },
  { expected: "#780b19", input: [120, 11, 25] },
  { expected: "#000bfc", input: [0, 11, 252] },
  { expected: false, input: [0, "11", 252] },
  { expected: false, input: "[0, 11, 252]" },
  { expected: false, input: { rgb: [0, 11, 252] } },
  { expected: false, input: [] },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = rgbToHexCode(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function rgbToHexCode(arr) {
  if (!Array.isArray(arr)) return false;
  for (let num of arr) {
    if (typeof num !== "number") return false;
  }
  if (arr.length === 0) return false;
  const code1 =
    Math.floor(arr[0] / 16).toString(16) + (arr[0] % 16).toString(16);
  const code2 =
    Math.floor(arr[1] / 16).toString(16) + (arr[1] % 16).toString(16);
  const code3 =
    Math.floor(arr[2] / 16).toString(16) + (arr[2] % 16).toString(16);

  return "#" + code1 + code2 + code3;
}
