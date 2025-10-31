const getPosts = document.getElementById("getPosts");
const selectUser = document.getElementById("selectUser");
const container = document.getElementById("container");

async function fetchData() {
  try {
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const postsResponse = await fetch(postUrl);
    const usersResponse = await fetch(usersUrl);
    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const data = [];

    for (let user of users) {
      person = {};
      for (let post of posts) {
        if (user.id === post.userId) {
          person.title = post.title;
          person.body = post.body;
          person.name = user.name;
          person.emailId = user.username;
        }
      }
      selectUser.insertAdjacentHTML(
        "beforeend",
        `<option value = ${user.username}>${user.name}</option>`
      );

      //   console.log(userList);
      data.push(person);
      for (user of data) {
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="card"><h3>${user.title}</h3>${user.body}</p><p>Name: ${user.name}</p><p>Email: ${user.emailId}</p></div>`
        );
      }
    }
  } catch {
    console.log("Failed to fetch");
  }
}

getPosts.addEventListener("click", () => {
  fetchData();
});
