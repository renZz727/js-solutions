const testCases = [
  {
    expected: [["A"], ["B", "B"]],
    input: 2,
  },
  {
    expected: [["A"], ["B", "B"], ["C", "C", "C"]],
    input: 3,
  },
  {
    expected: [
      ["A"],
      ["B", "B"],
      ["C", "C", "C"],
      ["D", "D", "D", "D"],
      ["E", "E", "E", "E", "E"],
    ],
    input: 5,
  },
  {
    expected: [],
    input: 0,
  },
  {
    expected: false,
    input: -4,
  },
  {
    expected: false,
    input: "10",
  },
  {
    expected: false,
    input: [],
  },
  {
    expected: false,
    input: [7],
  },
  {
    expected: false,
    input: { num: 12 },
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
    input: null,
  },

  {
    expected: false,
    input: " ",
  },
  {
    expected: false,
    input: ["10"],
  },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = pattern(testCase.input);
    let flag = true;

    if (typeof result !== typeof testCase.expected) flag = false;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      let expected = testCase.expected;
      if (expected.length === result.length) {
        for (let i = 0; i < result.length; i++) {
          if (expected[i].length !== result[i].length) flag = false;
        }
      } else flag = false;

      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function pattern(n) {
  if (typeof n !== "number" || n < 0) return false;
  let pattern = [];
  let res = [];
  let charCode = 65;
  for (let i = 0; i < n; i++) {
    res[i] = [];
    for (let j = 0; j < i + 1; j++) {
      res[i].push(String.fromCharCode(charCode));
    }
    pattern.push(res[i]);
    charCode++;
  }
  return pattern;
}
// pattern(5);
