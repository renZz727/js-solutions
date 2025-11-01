const testCases = [
  { expected: 2, date1: "2025-10-20", date2: "2025-10-22" },
  { expected: 151, date1: "2025-01-20", date2: "2025-06-20" },
  { expected: 103, date1: "2025-10-31", date2: "2026-02-11" },
  { expected: false, date1: "2025-12-25", date2: "2024-06-20" },
  { expected: 365, date1: "2024-11-01", date2: "2025-11-01" },
  { expected: 301, date1: "Jan 04 2025", date2: "2025-11-01" },
  { expected: 1826, date1: "jan 5 2020", date2: "Jan 04 2025" },
  { expected: 335, date1: "2020 jan 4", date2: "2020 dec 4" },
  { expected: false, date1: "2001 13 oct", date2: "201 3 octo" },
  { expected: false, date1: "2001 13 oct", date2: ["2001 14 oct"] },
  { expected: false, date1: ["2001 13 oct"], date2: ["35"] },
  { expected: false, date1: "2001 13 oct", date2: { date2: "2020 dec 4" } },
  { expected: false, date1: "2001 13 oct", date2: " " },
  { expected: false, date1: "2001 13 oct", date2: [] },
  { expected: false, date1: true, date2: false },
  { expected: false, date1: undefined, date2: false },
  { expected: false, date1: true, date2: null },
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = daysBetween(testCase.date1, testCase.date2);

    if (testCase.expected !== result)
      console.log(`Testcase ${index + 1} failed`);
    else console.log(`Testcase ${index + 1} passed`);
  });
}

function daysBetween(date1, date2) {
  if (
    typeof date1 !== "string" ||
    typeof date2 !== "string" ||
    date1.length === 0 ||
    date2.length === 0
  )
    return false;
  date1 = new Date(date1);
  date2 = new Date(date2);
  const days = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
  if (days < 0 || isNaN(days)) return false;
  return days;
}
