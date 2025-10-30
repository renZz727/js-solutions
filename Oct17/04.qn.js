const testCases = [
  {
    expected: [1, 2, 4, 5, 6, 3],
    first: [1, 2, 3],
    second: [4, 5, 6],
    pos: 2,
  },
  {
    expected: [1, 2, 4, 5, 6, 3],
    first: [1, 2, 3],
    second: [4, 5, 6],
    pos: 2,
  },
  {
    expected: [10, 23, 2, 12, 4],
    first: [10, 12, 4],
    second: [23, 2],
    pos: 1,
  },
  {
    expected: [0, 23, 2],
    first: [0],
    second: [23, 2],
    pos: 1,
  },
  {
    expected: "invalid position",
    first: [0],
    second: [23, 2],
    pos: 5,
  },
  {
    expected: "invalid position",
    first: [0],
    second: [23, 2],
    pos: -1,
  },
  {
    expected: [0, "23", 2],
    first: [0],
    second: ["23", 2],
    pos: 1,
  },
  {
    expected: ["0", "23", "2"],
    first: ["0"],
    second: ["23", "2"],
    pos: 1,
  },
  {
    expected: ["0", "23", "2"],
    first: ["0"],
    second: ["23", "2"],
    pos: 1,
  },
  {
    expected: false,
    first: `["0"]`,
    second: `["23", "2"]`,
    pos: 1,
  },
  {
    expected: false,
    first: `["0"]`,
    second: `["23", "2"]`,
    pos: 1,
  },
  {
    expected: false,
    first: { first: "10, 20" },
    second: {},
    pos: 1,
  },
  {
    expected: false,
    first: 10,
    second: 24,
    pos: 1,
  },
  {
    expected: false,
    first: true,
    second: [23, 5],
    pos: 1,
  },
  {
    expected: false,
    first: [24, 5],
    second: false,
    pos: 1,
  },{
    expected: false,
    first: undefined,
    second: [24, 10],
    pos: 1,
  },{
    expected: false,
    first: undefined,
    second: null,
    pos: 1,
  },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = positionArray(testCase.first, testCase.second, testCase.pos);
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

function positionArray(first, second, position) {
  if (!Array.isArray(first) || !Array.isArray(second)) return false;
  if (position > first.length || position < 0) return "invalid position";
  first.splice(position, 0, second);
  return first.flat();
}
