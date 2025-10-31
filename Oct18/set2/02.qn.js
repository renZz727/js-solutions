const testCases = [
  {
    expected: [{ weekNumber: 1, birthdays: 1 }],
    input: [new Date(2025, 0, 4)],
  },
  {
    expected: [
      { weekNumber: 6, birthdays: 1 },
      { weekNumber: 29, birthdays: 1 },
    ],
    input: [new Date(2025, 1, 10), new Date(2025, 6, 17)],
  },
  {
    expected: [
      { weekNumber: 6, birthdays: 1 },
      { weekNumber: 29, birthdays: 1 },
    ],
    input: [new Date(2024, 1, 10), new Date(2024, 6, 17)],
  },
  {
    expected: [
      { weekNumber: 6, birthdays: 1 },
      { weekNumber: 29, birthdays: 2 },
    ],
    input: [
      new Date(2024, 1, 10),
      new Date(2024, 6, 17),
      new Date(2024, 6, 21),
    ],
  },
  {
    expected: [
      { weekNumber: 6, birthdays: 1 },
      { weekNumber: 29, birthdays: 2 },
    ],
    input: [
      new Date(2022, 1, 10),
      new Date(2022, 6, 17),
      new Date(2022, 6, 21),
    ],
  },
  {
    expected: [
      { weekNumber: 15, birthdays: 1 },
      { weekNumber: 20, birthdays: 1 },
      { weekNumber: 25, birthdays: 1 },
    ],
    input: [
      new Date(2022, 3, 11),
      new Date(2022, 4, 17),
      new Date(2022, 5, 21),
    ],
  },
  {
    expected: [
      { weekNumber: 15, birthdays: 1 },
      { weekNumber: 16, birthdays: 2 },
    ],
    input: [
      new Date(2025, 3, 11),
      new Date(2025, 3, 17),
      new Date(2025, 3, 21),
    ],
  },
  {
    expected: [
      { weekNumber: 10, birthdays: 1 },
      { weekNumber: 11, birthdays: 2 },
    ],
    input: [
      new Date(2025, 2, 13),
      new Date(2025, 2, 12),
      new Date(2025, 2, 11),
    ],
  },
  {
    expected: [
      { weekNumber: 8, birthdays: 1 },
      { weekNumber: 11, birthdays: 1 },
      { weekNumber: 19, birthdays: 1 },
    ],
    input: [
      new Date(2025, 2, 13),
      new Date(2025, 1, 21),
      new Date(2025, 4, 12),
    ],
  },
  {
    expected: [{ weekNumber: 11, birthdays: 1 }],
    input: [new Date(2025, 2, 13)],
  },
  {
    expected: false,
    input: [new Date(2025, 2, 13), new Date(2025, 1, 21), "10-14-2025"],
  },
  {
    expected: [{ weekNumber: 11, birthdays: 1 }],
    input: [new Date(2025, 2, 13)],
  },
  {
    expected: false,
    input: ["10-15-2025", "10-14-2025", "10-18-2025"],
  },
  {
    expected: false,
    input: "2-10-2021",
  },
  {
    expected: false,
    input: 10 - 12 - 2021,
  },
  {
    expected: false,
    input: true,
  },
  {
    expected: false,
    input: false,
  },
  {
    expected: false,
    input: undefined,
  },
  {
    expected: false,
    input: null,
  },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    console.log(typeof new Date(2025, 2, 13));
    const result = findBirthdays(testCase.input);
    let flag = true;

    if (typeof result !== typeof testCase.expected) flag = false;

    if (typeof result === "boolean") {
      if (result === testCase.expected) {
        console.log(`Testcase ${index + 1} passed`);
      } else console.log(`Testcase ${index + 1} failed`);
    } else {
      const testExpected = testCase.expected;
      for (let i = 0; i < testExpected.length; i++) {
        for (let key in testExpected[i]) {
          if (
            !testExpected[i].hasOwnProperty(key) ||
            result[i][key] !== testExpected[i][key]
          )
            flag = false;
        }
      }

      if (flag === true) console.log(`Testcase ${index + 1} passed`);
      else console.log(`Testcase ${index + 1} failed`);
    }
  });
}

function findBirthdays(dates) {
  if (!Array.isArray(dates)) return false;
  for (let date of dates) {
    if (
      typeof date === "string" ||
      typeof date === "number" ||
      typeof date === "boolean"
    )
      return false;
  }

  const yrs = [];
  for (let date of dates) yrs.push(new Date(date.getFullYear(), 0, 1));
  const weekNumber = [];
  for (let i = 0; i < dates.length; i++) {
    weekNumber[i] =
      Math.floor((dates[i] - yrs[i]) / (1000 * 60 * 60 * 24) / 7) + 1;
  }

  const dup = [];
  const weeks = {};
  for (let week of weekNumber) {
    if (dup.includes(week)) {
      weeks[week] = weeks[week] + 1;
    } else weeks[week] = 1;
    dup.push(week);
  }

  const birthdays = [];
  for (let week in weeks) {
    const obj = {};
    obj["weekNumber"] = +week;
    obj["birthdays"] = weeks[week];
    birthdays.push(obj);
  }
  return birthdays;
}
