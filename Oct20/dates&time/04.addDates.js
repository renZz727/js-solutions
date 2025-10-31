const testCases = [
  { expected: "Sun Jan 18 2026", date: "2025-10-20", days: 90 },
  { expected: "Thu Apr 10 2025", date: "2025-01-20", days: 80 },
  { expected: "Sun Nov 02 2025", date: "2025-10-31", days: 2 },
  { expected: "Mon Jul 13 2026", date: "2025-12-25", days: 200 },
  { expected: "Sat Nov 01 2025", date: "2024-11-01", days: 365 },
  { expected: "Invalid Date", date: "202-11-0", days: 365 },
  { expected: "Mon Jan 04 2021", date: "jan 5 2020", days: 365 },
  { expected: "Sun Jan 03 2021", date: "2020 jan 4", days: 365 },
  { expected: "Sun Oct 13 2002", date: "2001 13 oct", days: 365  },
  { expected: false, date: "2001 13 oct", days: "35" },
  { expected: false, date: "2001 13 oct", days: ["35"]},
  { expected: false, date: "2001 13 oct", days: {days: "35"}},  
  { expected: false, date: "2001 13 oct", days: " " }, 
  { expected: false, date: "2001 13 oct", days: [] },
  { expected: false, date: true, days: false },
  { expected: false, date: undefined, days: false },
  { expected: false, date: true, days: null},
];
test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = addDays(testCase.date, testCase.days);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function addDays(date, n) {
  if(typeof n !== "number") return false;
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + n);
  return nextDate.toDateString();
}
