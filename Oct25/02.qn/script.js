const container = document.getElementById("container");
const scrollBar = document.getElementById("scrollBar");

container.addEventListener("scroll", () => {
  const percent = Math.abs(
    (container.scrollTop / (container.scrollHeight - container.clientHeight)) *
      100
  );
  scrollBar.style.width = `${percent}%`;
});
