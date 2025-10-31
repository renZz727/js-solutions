function numberToText(num) {
  num = "" + num;
  numbers = [...num];
  text = "";
  if (numbers.length === 4) {
    if (numbers[1] === "0" && numbers[2] === "0" && numbers[3] === "0") {
      text += onesList[numbers[0]] + " thousand";
    } else {
      text += onesList[numbers[0]] + " thousand ";
      text += onesList[numbers[1]] + " hundred and ";
      if (numbers[2] === "0") {
        text += onesList[numbers[3]];
      } else if (numbers[2] === "1") {
        let elevens = numbers[2] + numbers[3];
        text += elevensList[elevens];
      } else {
        text += tensList[numbers[2]] + " " + onesList[numbers[3]];
      }
    }
  } else if (numbers.length === 3) {
    if (numbers[1] === "0" && numbers[2] === "0") {
      text += onesList[numbers[0]] + " hundred";
    } else {
      text += onesList[numbers[0]] + " hundred and ";
      if (numbers[1] === "0") {
        text += onesList[numbers[2]];
      } else if (numbers[1] === "1") {
        let elevens = numbers[1] + numbers[2];
        text += elevensList[elevens];
      } else if (numbers[2] === "0") {
        text += tensList[numbers[1]];
      } else {
        text += tensList[numbers[1]] + " " + onesList[numbers[2]];
      }
    }
  } else if (numbers.length === 2) {
    if (numbers[1] === "0") {
      text += tensList[numbers[0]];
    } else if (numbers[0] === "1") {
      elevens = numbers[0] + numbers[1];
      text += elevensList[elevens];
    } else {
      text += tensList[numbers[0]] + " " + onesList[numbers[1]];
    }
  } else {
    text += onesList[numbers[0]];
  }
  return text.replace(text[0], text[0].toUpperCase());
}

let onesList = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

let elevensList = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "ninteen",
};

let tensList = {
  1: "ten",
  2: "twenty",
  3: "thirty",
  4: "fourty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninty",
};

let hundredsList = {};
console.log(numberToText(723));

console.log(numberToText(0));
console.log(numberToText(7));
console.log(numberToText(10));
console.log(numberToText(13));
console.log(numberToText(17));
console.log(numberToText(40));
console.log(numberToText(57));
console.log(numberToText(100));
console.log(numberToText(107));
console.log(numberToText(213));
console.log(numberToText(576));
console.log(numberToText(1000));
console.log(numberToText(2234));
console.log(numberToText(9234));
console.log(numberToText(2000));
console.log(numberToText(4325));
