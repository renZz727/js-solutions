function remove(e) {
  e.target.remove();
}
function showImage() {
  const inputImages = document.getElementById("inputImages" : string): HTMLElement | null;
  const imageDisplay = document.getElementById("imagesDisplay");
  const imagePaths = inputImages.files;

  if (imagePaths.length === 0) {
    const paragraph = document.getElementById("noImage");
    paragraph.style.display = "block";
  } else {
    const paragraph = document.getElementById("noImage");
    paragraph.style.display = "none";
    for (path of imagePaths) {
      imageDisplay.insertAdjacentHTML(
        "beforeend",
        `<img src="${path.name}" class="image"></button>`
      );
    }

    const imageTag = document.querySelectorAll(".image");
    console.log(imageTag);

    imageTag.forEach((img) => {
      img.addEventListener("click", remove);
    });
  }
}
