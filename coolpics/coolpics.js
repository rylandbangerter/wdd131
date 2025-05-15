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

function viewerTemplate(path, alt) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${path}" alt="${alt}">
    </div>
  `;
}

function viewHandler(event) {
  const clicked = event.target;
  if (clicked.tagName === "IMG") {
    const src = clicked.getAttribute("src");
    const base = src.split("-")[0];
    const fullImg = `${base}-full.jpeg`;
    const alt = clicked.getAttribute("alt");

    const viewer = viewerTemplate(fullImg, alt);
    document.body.insertAdjacentHTML("afterbegin", viewer);

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
  }
}

function closeViewer() {
  document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
