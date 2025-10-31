async function getMessage() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Network error");
      }, 1000);
    });
    let result = await promise;
  } catch (reject) {
    console.log(reject);
  }
}

getMessage().then;
