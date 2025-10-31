number1 = 576;
obj1 = { name: "John", admin: "true" };

number2 = number1;
obj2 = obj1;

number1 = 456;
obj1 = { name: "Adam", admin: "false" };

if (number1 === number2) console.log("Number copy not changed");
else console.log("Number copy changed");

if (obj1 === obj2) console.log("object copy not changed");
else console.log("object copy changed");

console.log(number1, obj1);
console.log(number2, obj2);
