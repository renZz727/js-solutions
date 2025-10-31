function dateFormating(date) {
  console.log("'en-US' Formating is " + date.toLocaleDateString("en-US"));
  console.log("'en-GB' Formating is " + date.toLocaleDateString("en-GB"));
}

const date = new Date();
dateFormating(date);
