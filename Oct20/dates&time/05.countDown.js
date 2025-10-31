function countDown(targetDate) {
  const target = new Date(targetDate).getTime();

  const now = Date.now();
  const rem = target - now;

  const days = Math.floor(rem / (1000 * 60 * 60 * 24));
  const hours = Math.floor(rem / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(rem / (1000 * 60)) % 60;
  const seconds = Math.floor(rem / 1000) % 60;
  if (rem < 0) return false;
  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`.trim();
}

countDown("2025-11-1");
