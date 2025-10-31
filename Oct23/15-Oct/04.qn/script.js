const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("btn");
const toogle = document.getElementById("display");

const list = [];
const localData = localStorage.getItem("data");
result = JSON.stringify(localData).replaceAll('"', "");
result = result.split(",");

// const result = JSON.stringify(localData).split(",");
// console.log(result.splice(1, result.lenght - 1));
for (item of result) {
  output.insertAdjacentHTML("beforeend", `<li class="list">${item}</li>`);
  input.value = "";
}

button.addEventListener("click", () => {
  output.textContent = "";
  list.push(input.value);

  localStorage.setItem("data", list);

  // console.log(list);
  for (item of list) {
    output.insertAdjacentHTML("beforeend", `<li class="list">${item}</li>`);
    input.value = "";
  }
});

output.addEventListener("click", (e) => {
  e.target.style.textDecoration = "line-through";
  e.target.classList.add("strike");
});

toogle.addEventListener("click", (e) => {
  const li = document.querySelectorAll(".strike");
  console.log(li);
  li.forEach((e) => {
    e.style.display = "none";
  });
});
