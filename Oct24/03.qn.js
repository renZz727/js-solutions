async function getMessage() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success");
        reject("Failed");
      }, 2000);
    });
    let message = await promise;
    console.log(message);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Promise completed");
  }
}
getMessage();
