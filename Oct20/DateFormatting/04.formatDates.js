function formatTimeZone(date, zone) {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: `${zone}`,
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
  return dateFormat;
}

const date = new Date();
console.log(formatTimeZone(date, "Asia/Kolkata"));
