const testCases = [
  { expected: true, input: "user@gmail.com" },
  { expected: true, input: "user123@gmail.com" },
  { expected: true, input: "ADMIN677@gmail.com" },
  { expected: true, input: "user.123@gmail.com" },
  { expected: false, input: "user@gamilcom" },
  { expected: false, input: "user123gmail.com" },
  { expected: false, input: "user.r@user@gmail.com" },
  { expected: false, input: "user123@.gmail.com" },
  { expected: false, input: "@gmail.com" },
  { expected: false, input: "user123@" },
  { expected: false, input: "user123@gmail.com." },
  { expected: true, input: "user#$82,.123@gmail.com" },
  { expected: false, input: "12344asdfa" },
  { expected: false, input: {} },
  { expected: false, input: [] },
  { expected: false, input: 1234 },
  { expected: false, input: undefined },
  { expected: false, input: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = isValidEmail(testCase.input);
    let flag = true;

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || !domain || domain.indexOf(".") === -1) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  return true;
}
