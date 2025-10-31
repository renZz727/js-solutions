// Using Spread Operator
function spreadClone(obj) {
  objClone = { ...obj };
  return objClone;
}

function assignClone(obj) {
  objClone = Object.assign(obj);
  return objClone;
}
console.log("Using Spread Operator ");
obj1 = { 1: "a", 2: "b" };
result1 = spreadClone(obj1);
obj1[1] = "c";
console.log(obj1);
console.log(result1);

console.log("Using Object.assign ");
obj2 = { 3: "a", 4: "b" };
result2 = assignClone(obj2);
obj2[3] = "c";
console.log(obj2);
console.log(result2);
