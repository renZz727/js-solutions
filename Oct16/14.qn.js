const testCases = [
  { expected: true, input: "A man, a plan, a canal, Panama!" },
  { expected: true, input: "Racecar" },
  { expected: false, input: "Hello, world!" },
  { expected: true, input: "Amma" },
  { expected: false, input: "passs" },
  { expected: true, input: "56565" },
  { expected: false, input: "5656" },
  { expected: false, input: ["Amma"] },
  { expected: false, input: { str: "Amma" } },
  { expected: false, input: {} },
  { expected: false, input: [] },
  { expected: false, input: 76867 },
  { expected: false, input: undefined },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = palindrome(testCase.input);
    let flag = true;

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function palindrome(str) {
  if (typeof str !== "string") return false;
  str = str
    .toLowerCase()
    .replaceAll("!", "")
    .replaceAll(",", "")
    .replaceAll(" ", "");
  let j = str.length - 1;
  for (let i = 0; i <= str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(j)) return false;
    j--;
  }
  return true;
}
