const testCases = [
  { expected: [10, 15, 30, 40], input: [10, 20, 15, 30, 22, 40] },
  { expected: [0, 5, 7, 8], input: [6, 9, 2, 0, 5, 7, 8, 2, 8] },
  { expected: [5, 8, 12, 24, 32], input: [5, 8, 12, 24, 32] },
  { expected: [5, 8, 9, 24], input: [10, 2, 5, 57, 8, 9, 24, 9, 5, 6, 1] },
  { expected: [2, 3, 7], input: [5, 10, 9, 2, 3, 5, 7, 4, 7, 1, 4, 7, 0] },
  { expected: [-8, 2, 4, 24], input: [-8, 2, 4, -6, 24, -7] },
  { expected: [2], input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { expected: [-7], input: [-1, -2, -3, -4, -5, -6, -7, -9] },
  { expected: [0, 1, 8], input: [2, 0, 9, 6, 12, 1, -5, 8, -2] },
  { expected: [-9, -5], input: [5, 1, 2, 0, -1, -9, -5] },
  { expected: false, input: { a: 1, b: 2 } },
  { expected: false, input: [] },
  { expected: false, input: "1, 3, 5, 10, 2" },
  { expected: false, input: {} },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = orderedChain(testCase.input);

    let flag = true;
    const test = testCase.expected;
    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      for (let i = 0; i < test.length; i++) {
        if (test[i] !== result[i]) flag = false;
      }

      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function orderedChain(arr) {
  if (!Array.isArray(arr) || arr === null) return false;
  let result = [];
  let sub = [];
  let temp = 0;

  let dup = [];
  let newArr = [];
  for (let num of arr) {
    if (!dup.includes(num)) {
      newArr.push(num);
    }
    dup.push(num);
  }

  for (let i = 0; i < newArr.length; i++) {
    sub = [newArr[i]];
    for (let j = i + 1; j < newArr.length; j++) {
      temp = newArr[i];
      for (let k = j; k < newArr.length; k++) {
        if (newArr[k] > temp) {
          sub.push(newArr[k]);
          temp = newArr[k];
        }
      }
      if (result.length > sub.length) result = result;
      else result = sub;
      sub = [newArr[i]];
    }
    sub = [];
  }

  return result;
}
