const testCases = [
  { expected: true, str1: "listen", str2: "silent" },
  { expected: true, str1: "restful", str2: "fluster" },
  { expected: false, str1: "hello", str2: "world" },
  { expected: true, str1: "was", str2: "saw" },
  { expected: true, str1: "melon", str2: "lemon" },
  { expected: true, str1: "slip", str2: "lips" },
  { expected: true, str1: "pool", str2: "loop" },
  { expected: true, str1: "now", str2: "own" },
  { expected: true, str1: "low", str2: "owl" },
  { expected: false, str1: "4321", str2: "1234" },
  { expected: false, str1: " ", str2: "world" },
  { expected: false, str1: "hello", str2: " " },
  { expected: false, str1: " ", str2: " " },
  { expected: false, str1: [], str2: "world" },
  { expected: false, str1: " ", str2: [] },
  { expected: false, str1: [], str2: [] },
  { expected: false, str1: "hwi", str2: {} },
  { expected: false, str1: " ", str2: null },
  { expected: false, str1: undefined, str2: " " },
  { expected: false, str1: "", str2: true },
  { expected: false, str1: false, str2: " " },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = isAnagram(testCase.str1, testCase.str2);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function isAnagram(s, t) {
  if (typeof s !== "string" || typeof t !== "string") return false;
  if (s.length !== t.length) return false;
  s = s.toLowerCase();
  t = t.toLowerCase();
  count = {};

  for (let char of s) {
    if (!isNaN(Number(char))) return false;
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}
