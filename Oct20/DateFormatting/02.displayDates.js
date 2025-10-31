function displayDate(date) {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  return dateFormat;
}

const date = new Date();
console.log(displayDate(date));
