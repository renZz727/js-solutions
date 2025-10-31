function getValue(val) {
  if (val == null || val == undefined) return "No value";
  else return val;
}
let val;
console.log(getValue());
console.log(getValue(val));
