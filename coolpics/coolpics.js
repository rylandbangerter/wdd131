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