const testCases = [
  { expected: [1, 4], fn: findSquare, input: [1, 2] },
  { expected: [1, 4, 9], fn: findSquare, input: [1, 2, 3] },
  { expected: [25], fn: findSquare, input: [5] },
  { expected: [4], fn: findSquare, input: [-2] },
  { expected: [4, 16], fn: findSquare, input: [-2, 4] },
  { expected: [0, 9, 16], fn: findSquare, input: [0, -3, 4] },
  { expected: false, fn: findSquare, input: ["1", "2", "3"] },
  { expected: false, fn: findSquare, input: [1, "2", 3] },
  { expected: false, fn: findSquare, input: [{ vales: [1, 2, 3] }] },
  { expected: [], fn: findSquare, input: [] },
  { expected: false, fn: findSquare, input: {} },
  { expected: false, fn: findSquare, input: "1, 2, 3" },
  { expected: false, fn: findSquare, input: "[1, 2, 3]" },
  { expected: false, fn: findSquare, input: true },
  { expected: false, fn: findSquare, input: false },
  { expected: false, fn: findSquare, input: undefined },
  { expected: false, fn: findSquare, input: null },
  { expected: false, fn: findSquare, input: 1234 },
];
testMyMap(testCases);
function testMyMap(testCases) {
  console.log("\nmyMap function\n");
  testCases.forEach((testCase, index) => {
    const result = myMap(testCase.input, testCase.fn);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (testCase.expected.length === result.length) {
        for (let i = 0; i < testCase.expected.length; i++) {
          if (testCase.expected[i] !== result[i]) flag = false;
        }
        if (flag === true) console.log(`Testcase ${index + 1} passed`);
        else console.log(`Testcase ${index + 1} failed`);
      } else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function myMap(arr, fn) {
  if (!Array.isArray(arr)) return false;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return false;
    result[i] = findSquare(arr[i]);
  }
  return result;
}

function findSquare(num) {
  return Math.pow(num, 2);
}

const testCases2 = [
  { expected: [3], fn: isPrime, input: [1, 2, 3, 4] },
  { expected: [3], fn: isPrime, input: [1, 2, 3] },
  { expected: [5], fn: isPrime, input: [5] },
  { expected: [], fn: isPrime, input: [-2] },
  { expected: [], fn: isPrime, input: [-2, 4] },
  { expected: [], fn: isPrime, input: [0, -3, 4] },
  { expected: false, fn: isPrime, input: ["1", "2", "3"] },
  { expected: false, fn: isPrime, input: [1, "2", 3] },
  { expected: false, fn: isPrime, input: [{ vales: [1, 2, 3] }] },
  { expected: [], fn: isPrime, input: [] },
  { expected: false, fn: isPrime, input: {} },
  { expected: false, fn: isPrime, input: "1, 2, 3" },
  { expected: false, fn: isPrime, input: "[1, 2, 3]" },
  { expected: false, fn: isPrime, input: true },
  { expected: false, fn: isPrime, input: false },
  { expected: false, fn: isPrime, input: undefined },
  { expected: false, fn: isPrime, input: null },
  { expected: false, fn: isPrime, input: 1234 },
];

testMyFilter(testCases2);
function testMyFilter(testCases) {
  console.log("\nmyFilter function\n");
  testCases.forEach((testCase, index) => {
    const result = myFilter(testCase.input, testCase.fn);
    let flag = true;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      if (testCase.expected.length === result.length) {
        for (let i = 0; i < testCase.expected.length; i++) {
          if (testCase.expected[i] !== result[i]) flag = false;
        }
        if (flag === true) console.log(`Testcase ${index + 1} passed`);
        else console.log(`Testcase ${index + 1} failed`);
      } else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function myFilter(arr, fn) {
  if (!Array.isArray(arr)) return false;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return false;
    if (fn(arr[i])) result.push(arr[i]);
  }
  return result;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 0; i <= num; i++) {
    if (num % 2 === 0) return false;
  }
  return true;
}

const testCases3 = [
  { expected: 10, fn: findSum, input: [1, 2, 3, 4], initial: 0 },
  { expected: 6, fn: findSum, input: [1, 2, 3], initial: 0 },
  { expected: 5, fn: findSum, input: [5], initial: 0 },
  { expected: 10, fn: findSum, input: [1, 2, 3], initial: 4 },
  { expected: -2, fn: findSum, input: [-2], initial: 0 },
  { expected: 2, fn: findSum, input: [-2, 4], initial: 0 },
  { expected: 1, fn: findSum, input: [0, -3, 4], initial: 0 },
  { expected: 11, fn: findSum, input: [0, -3, 4], initial: 10 },
  { expected: -4, fn: findSum, input: [0, -3, 4], initial: -5 },
  { expected: false, fn: findSum, input: ["1", "2", "3"], initial: 0 },
  { expected: false, fn: findSum, input: [1, "2", 3], initial: 0 },
  { expected: false, fn: findSum, input: [{ vales: [1, 2, 3] }], initial: 0 },
  { expected: 0, fn: findSum, input: [], initial: 0 },
  { expected: false, fn: findSum, input: {}, initial: 0 },
  { expected: false, fn: findSum, input: "1, 2, 3", initial: 0 },
  { expected: false, fn: findSum, input: "[1, 2, 3]", initial: 0 },
  { expected: false, fn: findSum, input: true, initial: 0 },
  { expected: false, fn: findSum, input: false, initial: 0 },
  { expected: false, fn: findSum, input: undefined, initial: 0 },
  { expected: false, fn: findSum, input: null, initial: 0 },
  { expected: false, fn: findSum, input: 1234, initial: 0 },
  { expected: false, fn: findSum, input: [1, 2, 3], initial: "4" },
];

testMyReduce(testCases3);
function testMyReduce(testCases) {
  console.log("\nmyReduce function\n");
  testCases.forEach((testCase, index) => {
    const result = myReduce(testCase.input, testCase.fn, testCase.initial);
    let flag = true;

    if (result === testCase.expected) {
      console.log(`Testcase ${index + 1} passed`);
    } else console.log(`Testcase ${index + 1} failed`);
  });
}

function myReduce(arr, fn, initialValue) {
  if (!Array.isArray(arr)) return false;
  if (typeof initialValue !== "number") return false;
  let result = initialValue;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return false;
    result = findSum(arr[i], result);
  }
  return result;
}

function findSum(num, sum) {
  return num + sum;
}
