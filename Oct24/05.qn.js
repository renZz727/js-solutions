function afterTwoSecs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("After 2 secs");
    }, 2000);
  });
}

function afterThreeSecs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("After 3 secs");
    }, 3000);
  });
}

function afterFourSecs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("After 4 secs");
    }, 4000);
  });
}
afterTwoSecs().then((resolve) => console.log(resolve));
afterThreeSecs().then((resolve) => console.log(resolve));
afterFourSecs().then((resolve) => console.log(resolve));
