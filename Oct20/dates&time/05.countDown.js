function countDown(target) {
  const currentDate = new Date();
  const targetDate = new Date(target);
  console.log(targetDate - currentDate);
  const sec = (targetDate - currentDate) / 1000;
  const min = sec / 60;
  const hr = min / 60;
  const days = hr / 24;
  console.log(
    `${days.toFixed()} days ${hr.toFixed()} hours ${min.toFixed()} minutes and ${sec.toFixed()} seconds}`
  );
}

countDown("2025-10-26");
