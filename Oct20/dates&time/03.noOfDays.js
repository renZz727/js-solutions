function daysBetween(date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(daysBetween("2025-10-13", "2025-10-20"));
console.log(daysBetween("2025-09-13", "2025-12-20"));
