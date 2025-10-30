const testCases = [
  { expected: ["aab", "aba", "baa"], input: "aab" },
  { expected: ["ab", "ba"], input: "ab" },
  { expected: ["abc", "acb", "bac", "bca", "cab", "cba"], input: "abc" },
  {
    expected: [
      "abca",
      "abac",
      "acba",
      "acab",
      "aabc",
      "aacb",
      "baca",
      "baac",
      "bcaa",
      "caba",
      "caab",
      "cbaa",
    ],
    input: "abca",
  },
  { expected: ["a"], input: "a" },
  { expected: ["a"], input: "a " },
  { expected: false, input: ["abc"] },
  { expected: false, input: { str: "abc" } },
  { expected: false, input: [] },
  { expected: false, input: {} },
  { expected: false, input: 476 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = getUniquePermutations(testCase.input);
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

function getUniquePermutations(str) {
  if (typeof str !== "string") return false;
  str = str.trim().replaceAll(" ", "");
  if (str.length === 1) return [str];
  const perms = new Set();

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    for (let perm of getUniquePermutations(remaining)) {
      perms.add(currentChar + perm);
    }
  }

  return [...perms];
}
