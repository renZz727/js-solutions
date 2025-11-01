const testCases = [
  {
    expected: "October 20, 2025 at 5:30 AM",
    date: "2025-10-20",
    zone: "Asia/Kolkata",
  },
  {
    expected: "January 21, 2025 at 5:30 AM",
    date: "2025-01-21",
    zone: "Asia/Kolkata",
  },
  { expected: false, date: "2025-10-31", zone: "Australia" },
  { expected: false, date: "2025-12-25", zone: "india" },
  { expected: false, date: "2024-11-01", zone: "Kerala" },
  { expected: false, date: "202-11-0", zone: "kerala/india" },
  {
    expected: "January 5, 2020 at 12:00 AM",
    date: "january 5 2020",
    zone: "Asia/Kolkata",
  },
  { expected: false, date: "20/2/2000", zone: "Asia/Kolkata" },
  { expected: false, date: "2002 13 ", zone: "Asia/Kolkata" },
  { expected: false, date: ["2001 13 oct"], zone: "Asia/Kolkata" },
  { expected: false, date: "2001 13 oct", zone: ["Asia/Kolkata"] },
  { expected: false, date: "2001 13 oct", zone: { zone: "Asia/Kolkata" } },
  { expected: false, date: "2001 13 oct", zone: " " },
  { expected: false, date: "2001 13 oct", zone: [] },
  { expected: false, date: true, zone: false },
  { expected: false, date: undefined, zone: false },
  { expected: false, date: true, zone: null },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = formatTimeZone(testCase.date, testCase.zone);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function formatTimeZone(date, zone) {
  if (typeof date !== "string" || typeof zone !== "string") return false;
  date = new Date(date);
  let flag = 0;
  let dateFormat;
  if (!date) return false;
  try {
    dateFormat = new Intl.DateTimeFormat("en-US", {
      timeZone: `${zone}`,
      dateStyle: "long",
      timeStyle: "short",
    }).format(date);
  } catch {
    flag = 1;
  }
  if (flag === 1) return false;
  return dateFormat;
}
