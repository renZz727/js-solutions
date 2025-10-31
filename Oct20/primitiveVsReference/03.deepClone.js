function deepClone(obj) {
  let objClone = JSON.parse(JSON.stringify(obj));
  return objClone;
}
let obj = { user: { name: "John", age: 25 } };
let clone = deepClone(obj);
// console.log(obj);
clone.user.name = "Adam";
console.log(obj);
console.log(clone);
