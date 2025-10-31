async function getMessage() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
  let result = await promise;
  console.log(result);
}

getMessage();

