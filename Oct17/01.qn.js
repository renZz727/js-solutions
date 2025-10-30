const testCases = [
  {
    expected: 130,
    input: [
      [1, 2, 3],
      [0, 7],
    ],
  },
  {
    expected: 130,
    input: [
      [0, 7],
      [1, 2, 3],
    ],
  },
  {
    expected: 130,
    input: [
      [1, 2, 3],
      [0, 7],
    ],
  },
  {
    expected: 7,
    input: [[0], [0, 7]],
  },
  {
    expected: 0,
    input: [[0], [0]],
  },
  {
    expected: 7,
    input: [[], [0, 7]],
  },
  {
    expected: 0,
    input: [[], []],
  },
  {
    expected: false,
    input: ["1, 2, 3", "0, 7"],
  },
  {
    expected: false,
    input: [{ str1: "1, 2, 3", str2: "0, 7" }],
  },
  {
    expected: false,
    input: { str1: "1, 2, 3", str2: "0, 7" },
  },
  {
    expected: false,
    input: {},
  },
  {
    expected: 0,
    input: [],
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
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = findSum(testCase.input);

    console.log(testCase.expected, "  ", result);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function findSum(arr) {
  if (!Array.isArray(arr)) return false;
  let total = 0;
  flag = true;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    if (!Array.isArray(arr[i])) return false;
    arr[i].forEach((ele) => {
      sum = sum + String(ele);
    });
    total = total + Number(sum);
  }
  return total;
}
