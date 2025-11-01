const testCases = [
  {
    expected: [["care"], ["cat"]],
    input: ["care", "cat"],
  },
  {
    expected: [["care", "race"], ["god"], ["cat"]],
    input: ["care", "race", "god", "cat"],
  },
  {
    expected: [["care", "race", "acre"], ["dog", "god"], ["cat"]],
    input: ["care", "race", "acre", "dog", "god", "cat"],
  },
  {
    expected: [["care", "race", "acre"], ["dog", "god"], ["cat"]],
    input: ["care", "race", "acre", "dog", "god", "cat"],
  },
  {
    expected: [["care"], ["dog"], ["cat"]],
    input: ["care", "dog", "cat"],
  },
  {
    expected: [["care"]],
    input: ["care"],
  },
  {
    expected: false,
    input: ["43", "34"],
  },
  {
    expected: [],
    input: [],
  },
  {
    expected: false,
    input: { string: ["care", "race", "acre", "dog", "god", "cat"] },
  },
  {
    expected: false,
    input: {},
  },
  {
    expected: false,
    input: 1234,
  },
  {
    expected: false,
    input: "care, race, acre, dog",
  },
  {
    expected: false,
    input: " ",
  },
  {
    expected: false,
    input: true,
  },
  {
    expected: false,
    input: false,
  },
  {
    expected: false,
    input: undefined,
  },
  {
    expected: false,
    input: undefined,
  },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = groupAnagram(testCase.input);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (testCase.expected.length === result.length) {
        for (let i = 0; i < testCase.expected.length; i++) {
          for (let j = 0; j < testCase.expected.length; j++) {
            if (testCase.expected[i][j] !== result[i][j]) flag = false;
          }
        }
        if (flag === true) console.log(`Testcase ${index + 1} passed`);
        else console.log(`Testcase ${index + 1} failed`);
      } else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function groupAnagram(words) {
  if (!Array.isArray(words)) return false;
  const map = new Map();
  for (const word of words) {
    if(!isNaN(Number(word))) return false;
    const key = word.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  return [...map.values()].sort((a, b) => b.length - a.length);
}

