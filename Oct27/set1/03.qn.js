const person = {
  firstName: "John",
  lastName: "Doe",
  birthyear: 1990,
  getFullName: function (obj) {
    return `${obj.firstName} ${obj.lastName}`;
  },
  getAge: function (obj) {
    const birthyear = obj.birthyear;
    const now = Date.now();
    const presentYear = new Date(now).getFullYear();
    const year = presentYear - birthyear;
    return year;
  },
};

console.log(person.getFullName(person));
console.log(person.getAge(person));
