const scroll = document.getElementById("scrollBar");
const read = document.getElementById("container");

read.addEventListener("scroll", (e) => {
  width = Math.abs(
    (read.scrollTop / (read.scrollHeight - read.clientHeight)) * 100
  );
  scroll.style.width = `${width}%`;
});
