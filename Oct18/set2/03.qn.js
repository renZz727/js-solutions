const testCases = [
  {
    expected: [
      [2, 7],
      [9, 1],
      [0, 5],
    ],
    input: [
      [2, 9, 0],
      [7, 1, 5],
    ],
  },
  {
    expected: [
      [1, 4],
      [3, 2],
    ],
    input: [
      [1, 3],
      [4, 2],
    ],
  },
  {
    expected: [
      [1, 4, 1],
      [3, 2, 3],
    ],
    input: [
      [1, 3],
      [4, 2],
      [1, 3],
    ],
  },
  {
    expected: [
      [1, 4, 1],
      [3, 2, 3],
      [2, 4, 8],
    ],
    input: [
      [1, 3, 2],
      [4, 2, 4],
      [1, 3, 8],
    ],
  },
  {
    expected: [[1, 4, 1]],
    input: [[1], [4], [1]],
  },
  {
    expected: false,
    input: [
      [1, 3, 4],
      [2, 3, 4],
      [2, 3],
    ],
  },
  {
    expected: false,
    input: [[1], [2, 3, 4], [2, 3]],
  },
  {
    expected: false,
    input: {
      1: [1],
      2: [2, 3, 4],
      3: [2, 3],
    },
  },
  {
    expected: false,
    input: `[
      [1, 3, 4],
      [2, 3, 4],
      [2, 3, 4],
    ]`,
  },
  {
    expected: false,
    input: ["1, 3, 4", "2, 3, 4", "2, 3, 4"],
  },
  {
    expected: false,
    input: 12312345,
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
    input: null,
  },
  {
    expected: false,
    input: undefined,
  },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = transpose(testCase.input);
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

function transpose(matrix) {
  if (!Array.isArray(matrix)) return false;
  for (let i = 0; i < matrix.length; i++) {
    if (!Array.isArray(matrix[i])) return false;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i].length !== matrix[j].length) return false;
    }
  }
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}
