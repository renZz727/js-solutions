function deepClone(obj) {
  let newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
}

let person = {
  name: "John",
  age: 22,
  add: { sal: 10000, mob: { mob1: 1234678, mob2: 34321 } },
};

console.log(person);

let personClone = deepClone(person);

console.log(personClone);

person.add.sal = 20000;

console.log(person);
console.log(personClone);
