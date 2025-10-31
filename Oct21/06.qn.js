const testCases = [
  { expected: "The password is Strong", input: "admin343js@123" },
  { expected: "The password is Medium", input: "password7" },
  { expected: "The password is Medium", input: "password@" },
  { expected: "The password is weak", input: "password" },
  { expected: "The password is Medium", input: "123@pass" },
  { expected: "The password is Medium", input: "1234@348" },
  { expected: "The password is weak", input: "123#34" },
  { expected: false, input: 1234567890 },
  { expected: false, input: null },
  { expected: false, input: { password: "admin@1234#" } },
  { expected: "The password is weak", input: "" },
  { expected: false, input: {} },
  { expected: false, input: ["admin@123#"] },
  { expected: false, input: [] },
  { expected: false, input: undefined },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = passwordChecker(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function passwordChecker(password) {
  if (typeof password !== "string" || password === null) return false;
  spclChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    ",",
    ".",
    "/",
    "?",
  ];
  numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  includesSpcl = includesLower = includesUpper = includesNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (spclChars.includes(password[i])) includesSpcl = true;
    if (password.includes(password[i].toUpperCase())) includesUpper = true;
    if (password.includes(password[i].toLowerCase())) includesLower = true;
    if (numbers.includes(password[i])) includesNumber = true;
  }

  if (
    password.length > 8 &&
    includesSpcl &&
    includesLower &&
    includesUpper &&
    includesNumber
  ) {
    return "The password is Strong";
  } else if (password.length > 7 && (includesNumber || includesSpcl)) {
    return "The password is Medium";
  } else {
    return "The password is weak";
  }
}
