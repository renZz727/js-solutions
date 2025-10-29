const testCases = [
  { expected: { h: 1, e: 1, l: 2, o: 1 }, input: "hello" },
  {
    expected: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 },
    input: "programming",
  },
  {
    expected: {
      f: 2,
      l: 3,
      o: 3,
      x: 2,
      i: 9,
      n: 3,
      h: 1,
      p: 1,
      c: 1,
      a: 1,
      t: 1,
    },
    input: "floxinoxinihilipilification",
  },
  {
    expected: { a: 2, n: 1, t: 1, h: 1, e: 1 },
    input: "a an the",
  },
  {
    expected: false,
    input: " ",
  },
  {
    expected: false,
    input: "",
  },
  {
    expected: false,
    input: { word: "family" },
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
    input: ["family", "Home"],
  },
  {
    expected: false,
    input: ["code"],
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
    const result = frequencyCount(testCase.input);
    let flag = true;

    if (typeof result !== typeof testCase.expected) flag = false;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      const testExpected = testCase.expected;
      let expectedCount = 0;
      let resultCount = 0;
      for (let i in testExpected) expectedCount++;
      for (let i in result) resultCount++;
      if (expectedCount !== resultCount) flag = false;
      for (let key in testExpected) {
        if (!result.hasOwnProperty(key) || result[key] !== testExpected[key])
          flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function frequencyCount(word) {
  if (typeof word !== "string" || word === " " || word === "" || word === null)
    return false;
  word = word.replaceAll(" ", "");
  word = [...word];
  let frequencyCount = {};
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        count++;
      }
    }
    frequencyCount[word[i]] = count;
  }
  return frequencyCount;
}
