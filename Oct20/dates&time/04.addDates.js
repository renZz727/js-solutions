function addDays(date, n) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + n);
  return nextDate.toDateString();
}
console.log(addDays("2025-10-20", 90));
