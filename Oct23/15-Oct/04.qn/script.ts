const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLUListElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const toogle = document.getElementById("display") as HTMLButtonElement;

const list: string[] = [];
const localData = localStorage.getItem("data");
if (localData) {
  const result = localData.split(",");
  for (const item of result) {
    output.insertAdjacentHTML("beforeend", `<li class="list">${item}</li>`);
    input.value = "";
  }
}

button.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  list.push(value);

  localStorage.setItem("data", list.join(","));

  for (const item of list) {
    output.insertAdjacentHTML("beforeend", `<li class="list">${item}</li>`);
  }
  input.value = "";
});

output.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  target.style.textDecoration = "line-through";
  target.classList.add("strike");
});

toogle.addEventListener("click", (e) => {
  const doneItems = document.querySelectorAll<HTMLElement>(".strike");
  doneItems.forEach((item) => (item.style.display = "none"));
});
