function checkArray(...parm) {
  return Array.isArray(parm);
}

function restChecker(...rest) {
  return Array.isArray(rest);
}

console.log(checkArray([]));
console.log(checkArray({}));
console.log(checkArray(1, 3, 5));
