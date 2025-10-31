const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let emp = [];
console.log(
  "ENTER A CHOICE(n) : 1. Add Employee 2. List Employees 3. Delete by name"
);
rl.on("line", (input) => {
  obj = {};
  if (input === "1") {
    rl.question("Enter name : ", (name) => {
      obj["name"] = name;
      rl.question("Enter age : ", (age) => {
        obj["age"] = age;
        rl.question("Enter role : ", (role) => {
          obj["role"] = role;
          emp.push(obj);
        });
      });
    });
  } else if (input === "2") {
    console.log(emp);
  } else if (input === "3") {
    rl.question("Enter name to remove: ", (name) => {
      for (let i = 0; i < emp.length; i++) {
        if (emp[i].name === name) {
          emp.splice(i, i + 1);
        }
      }
    });
  } else {
    console.log("Enter valid input");
  }
});

// function readInput() {
//   rl.question("Enter a choice: ", (ch) => {
//     if (ch === "1") {
//       const name = readEmployee('What is your name? ');
//       const age = readEmployee('Age');

//       // addEmployee({name: "renson", age: 23});
//       // input = {};
//       // r1.question("Name : ", (name) => {
//       //     input[name] = name;
//       //     r1.question("Age : ", (age) => {
//       //         input[age] = age;
//       //     })
//       // });
//       // console.log(input);
//       rl.close();
//     } else if (ch === "2") {
//       console.log("List");
//     } else if (ch === "3") {
//       console.log("delete");
//     } else {
//       console.log("Enter a valid choice");
//     }
//     // console.log(`Hello, ${ch}`);
//     rl.close();
//   });
// }

// const readline = require("readline");
// const { stdin: input, stdout: output } = require("node: process");

// const r1 = readline.createInterface({ input, output });

// let http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello world");
//     console.log("heii");
//   })
//   .listen(5050);

// employeeList = [];
// function addEmployee() {
//   obj = {};
//   rl.question("Enter name ", (name) => {
//     obj[name] = name;
//     rl.question("Enter age: ", (age) => {
//       obj[age] = age;
//       rl.question("Enter role: ", (role) => {
//         obj[role] = role;
//         display();
//       });
//     });
//   });
//   employeeList.push(obj);
//   //   rl.on("line", (input) => {
//   //     rl.question("Enter age ", (item) => {
//   //         console.log(age);
//   //     })
//   //   });
// }

// function display() {
//   console.log(employeeList);
// }

// function removeEmployee(name) {}

// function choice() {
//   console.log(`1. Add Employee \n 2.List Employees\n 3.Delete by name`);
//   rl.question("Enter a choice", (ch) => {
//     if (ch === "1") {
//       addEmployee();
//       choice();
//     } else if (ch === "2") {
//       display();
//     } else if (ch === "3") {
//       removeEmployee();
//     } else {
//       console.log("Not valid");
//     }
//   });
// }
// choice();
