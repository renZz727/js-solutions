function safeAdd(a, b) {
  return (a + b).toFixed(2);
}

console.log(safeAdd(0.1, 0.2));
console.log(safeAdd(0.45, 0.54));
