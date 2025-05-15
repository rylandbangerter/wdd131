const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  if (menu) {
    menu.classList.toggle("hide");
  }
}

if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Modal Image Viewer
const figures = document.querySelectorAll(".gallery figure img");

figures.forEach((img) => {
  img.addEventListener("click", () => {
    const viewer = document.createElement("div");
    viewer.classList.add("viewer");

    const fullImage = document.createElement("img");
    fullImage.src = img.src.replace("-sm", "-full"); // optional: use full-size image
    fullImage.alt = img.alt;

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-viewer");
    closeButton.textContent = "✖";

    closeButton.addEventListener("click", () => viewer.remove());

    // Close modal when clicking outside the image
    viewer.addEventListener("click", (e) => {
      if (e.target === viewer) {
        viewer.remove();
      }
    });

    viewer.appendChild(fullImage);
    viewer.appendChild(closeButton);
    document.body.appendChild(viewer);
  });
});
