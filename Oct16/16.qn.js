const testCases = [
  {
    expected: ["is", "fun", "open", "source", "programming"],
    input: ["open", "source", "programming", "is", "fun"],
  },
  {
    expected: ["hello", "world"],
    input: ["hello", "world"],
  },
  {
    expected: ["cat", "dog", "tiger", "elephant"],
    input: ["cat", "dog", "tiger", "elephant"],
  },
  {
    expected: ["cat", "dog", "tiger", "elephant"],
    input: ["elephant", "tiger", "cat", "dog"],
  },
  {
    expected: ["10", "100", "1000", "10000"],
    input: ["10", "10000", "100", "1000"],
  },
  {
    expected: ["a", "b", "c", "d"],
    input: ["a", "b", "c", "d"],
  },
  {
    expected: ["d", "cc", "bbb", "aaaa"],
    input: ["aaaa", "bbb", "cc", "d"],
  },
  {
    expected: false,
    input: `"aaaa", "bbb", "cc", "d"`,
  },
  {
    expected: false,
    input: { str1: "aaaa", str2: "bbb", str3: "cc", str4: "d" },
  },
  {
    expected: false,
    input: {},
  },
  {
    expected: false,
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
    const result = sortOnLength(testCase.input);
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

function sortOnLength(arr) {
  if (!Array.isArray(arr) || arr === null || arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].length > arr[j + 1].length) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
