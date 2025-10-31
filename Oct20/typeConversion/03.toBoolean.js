function toBoolean(input) {
  if (input === "yes" || input === "true" || input === "1") return true;
  else return false;
}
console.log(toBoolean("yes"));
console.log(toBoolean("true"));
console.log(toBoolean("1"));
console.log(toBoolean("0"));
console.log(toBoolean("false"));
