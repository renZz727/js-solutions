function mulitplyFunction() {
  return new Promise((resolve, reject) => {
    resolve(5);
  });
}

mulitplyFunction()
  .then((resolve) => {
    console.log(resolve * 2);
    return resolve * 2;
  })
  .then((result) => {
    console.log(result * 2);
  });
