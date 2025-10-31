function greet(str, greeting) {
    if (greeting === void 0) { greeting = "Hello, "; }
    return "".concat(greeting, " ").concat(str);
}
var message1 = greet("Alice");
var message2 = greet("Bob", "Hi, ");
console.log(message1);
console.log(message2);
