const testCases = [
  { expected: "one", input: 1 },
  { expected: "ten", input: 10 },
  { expected: "seventeen", input: 17 },
  { expected: "twenty", input: 20 },
  { expected: "eighty nine", input: 89 },
  { expected: "one hundred", input: 100 },
  { expected: "one hundred four", input: 104 },
  { expected: "three hundred fourty nine", input: 349 },
  { expected: "nine hundred ninty nine", input: 999 },
  { expected: "One thousand twenty four", input: 1024 },
  { expected: "One thousand seven hundred seventy seven", input: 1777 },
  { expected: "Two thousand", input: 2000 },
  { expected: false, input: "300" },
  { expected: false, input: { num: 25 } },
  { expected: false, input: [2000] },
  { expected: false, input: false },
  { expected: false, input: true },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = converter(testCase.input);
    let flag = true;

    // console.log(testCase.expected, "  ",result);
    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function converter(num) {
  if (typeof num !== "number") return false;
  const ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "tweleve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "ninteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninty",
  ];

  if (num < 10) return ones[num];
  else if (num < 20) return teens[Math.floor(num % 10)];
  else if (num < 100)
    return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "");
  else if (num < 1000) {
    const rem = num % 100;
    return (
      ones[Math.floor(num / 100)] +
      " hundred" +
      (rem ? " " + converter(rem) : "")
    );
  } else if (num <= 2000) {
    if (num === 2000) return "Two thousand";
    else {
      const rem = num % 1000;
      return "One thousand " + (rem ? converter(rem) : "");
    }
  }
}
