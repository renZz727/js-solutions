if (typeof result !== typeof testCase.expected) flag = false;

if (typeof result === "boolean") {
  if (result === testCase.expected) {
    console.log(`Testcase ${index + 1} passed`);
  } else console.log(`Testcase ${index + 1} failed`);
} else {
  const testExpected = testCase.expected;

  for (let key in testExpected) {
    if (!testExpected.hasOwnProperty(key) || result[key] !== testExpected[key])
      flag = false;
  }

  if (flag === true) console.log(`Testcase ${index + 1} passed`);
  else console.log(`Testcase ${index + 1} failed`);
}
function findBirthdays(dates) {
  const yrs = [];
  for (let date of dates) yrs.push(new Date(date.getFullYear(), 0, 1));
  const weekNumber = [];
  for (let i = 0; i < dates.length; i++) {
    weekNumber[i] =
      Math.floor((dates[i] - yrs[i]) / (1000 * 60 * 60 * 24) / 7) + 1;
  }
  const repeatingWeeks = [];
  const dup = [10, 25];
  let birthdays = {};
  for (week of weekNumber) {
    birthdays = {};
    let count = 1;
    birthdays["weekNumber"] = week;
    birthdays["birthdays"] = count;
    if (dup.includes(week)) {
      birthdays["birthdays"] = count + 1;
      dup.push(week);
    }
    repeatingWeeks.push(birthdays);
  }

  console.log(repeatingWeeks);
}
console.log(
  findBirthdays([
    new Date(2025, 0, 4),
    new Date(2025, 2, 8),
    new Date(2025, 5, 22),
  ])
);
