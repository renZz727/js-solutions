const testCases = [
  { expected: { hello: 2, world: 2 }, input: "Hello hello world, world!" },
  { expected: { hello: 2, world: 1 }, input: "Hello hello world," },
  { expected: false, input: "Hello hello 454," },
  { expected: { i: 3, j: 3, k: 3 }, input: "i i i j j j k k k" },
  { expected: false, input: undefined },
  { expected: false, input: 135 },
  { expected: false, input: {} },
  { expected: false, input: { str: "1 3 5" } },
  { expected: false, input: null },
  { expected: false, input: [] },
  { expected: false, input: ["Hello", "world"] },
  { expected: false, input: [{ hello: 1, world: 2 }] },
  { expected: false, input: 10 },
  { expected: false, input: true },
  { expected: false, input: false },
  {
    expected: { this: 1, is: 1, a: 1, cup: 1, of: 1, tea: 1 },
    input: "this is a cup of tea",
  },
  {
    expected: {
      an: 2,
      umberlla: 1,
      a: 3,
      "pen,": 1,
      "areoplane,": 1,
      "jacket,": 1,
      teacher: 1,
    },
    input: "an umberlla, a pen, an areoplane, a jacket, a teacher",
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
      for (let key in testExpected) {
        if (
          !testExpected.hasOwnProperty(key) ||
          result[key] !== testExpected[key]
        )
          flag = false;
      }
      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function frequencyCount(sentence) {
  if (typeof sentence !== "string" || sentence === null) return false;
  let words = sentence.toLowerCase().trim("").replace("!", "");
  words = words.replace(",", "").split(" ");
  let frequencyCount = {};
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
      if (typeof words[i] !== "string" || !isNaN(Number(+words[i])))
        return false;
      if (words[i] === words[j]) {
        count++;
      }
    }
    frequencyCount[words[i]] = count;
  }
  return frequencyCount;
}
