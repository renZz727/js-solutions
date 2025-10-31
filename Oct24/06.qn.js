async function message() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Login Successful");
      }, 3000);
    });
    let message = await promise;
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

message();
