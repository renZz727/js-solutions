const testCases = [
  { expected: "C CA CAT CAT AT T ", input: "CAT" },
  { expected: "C CA CAT CAT AT T ", input: "CAT" },
];

test(testCases);
function test(testCases) {
  testCases.forEach((testCase, index) => {
    const result = pattern(testCase.input);
    console.log(testCase.expected, " ", result);

    if (testCase.expected === result)
      console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}

function pattern(str) {
  result = "";
  copy = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    copy += result + " ";
  }
  for (let i = 0; i < str.length; i++) {
    copy += str.substring(i, str.length) + " ";
  }
  return copy;
}

pattern("CAT");

// const testCases = [{expected: true, input: 7}, {expected: false, input: 4}];

// test(testCases);
// function test(testCases) {
//     testCases.forEach((element, index) => {
//         const result = isPrime(element.input);

//         if(element.expected === result)
//             console.log(`Testcase ${index + 1} passed`);
//         else console.log(`Testcase ${index + 1} failed`);
//     });
// }

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 0; i <= num; i++) {
//     if (num % 2 === 0) return false;
//   }
//   return true;
// }
