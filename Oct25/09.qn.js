function emailValidator(email) {
  let spclChar = email.split("@");
  let com = spclChar[1].split(".");
  if (
    spclChar.length == 2 &&
    spclChar[1].includes(".") &&
    com.length === 2 &&
    com[1].length >= 2
  ) {
    return true;
  }
  return false;
}

console.log(emailValidator("invalid@email.com"));
console.log(emailValidator("user@example.in"));
console.log(emailValidator("test@example.com.com"));
console.log(emailValidator("user@domain"));
console.log(emailValidator("user@exa@p.le.c"));
console.log(emailValidator("user@exa@email.com"));
console.log(emailValidator("user@exa@email.com."));
