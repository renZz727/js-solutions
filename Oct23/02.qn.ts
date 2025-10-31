function greet(str: string, greeting: String = "Hello, ") {
  return `${greeting} ${str}`;
}
const message1: string = greet("Alice");
const message2: string = greet("Bob", "Hi, ");
console.log(message1);
console.log(message2);
