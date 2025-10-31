const testCases = [
  { expected: "user", input: "user@gmail.com" },
  { expected: "user", input: "user@email.in" },
  { expected: "user042", input: "user042@gmail.com" },
  { expected: false, input: "user.com" },
  { expected: false, input: "john07@" },
  { expected: false, input: "abcdef " },
  { expected: false, input: "@gmail.com" },
  { expected: false, input: "" },
  { expected: false, input: ["myFunction"] },
  { expected: false, input: { camelCase: "myFunction" } },
  { expected: false, input: {} },
  { expected: false, input: 726 },
  { expected: false, input: true },
  { expected: false, input: false },
  { expected: false, input: undefined },
  { expected: false, input: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = extractUsername(testCase.input);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function extractUsername(email) {
  if (typeof email !== "string") return false;
  username = email.split("@");
  for (let item in username) {
    if (username.includes("")) username.pop(item);
  }
  if (username.length < 2) return false;
  return username[0];
}
