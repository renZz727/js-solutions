function formatDate(date) {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
  return dateFormat;
}

const date = new Date();
console.log(formatDate(date));
