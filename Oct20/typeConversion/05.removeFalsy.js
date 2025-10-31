function removeFalsy(arr) {
  falsyValues = [false, 0, "", null, undefined, NaN];
  return arr.filter((ele) => !falsyValues.includes(ele));
}

console.log(removeFalsy([false, 0, "", null, 1, NaN]));
console.log(removeFalsy([true, "", null, undefined, "hello"]));
console.log(removeFalsy([false, 0, "", null, undefined, NaN]));
