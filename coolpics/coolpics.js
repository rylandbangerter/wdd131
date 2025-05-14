document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
  });

  function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  window.addEventListener("resize", handleResize);
  handleResize();

  // Modal logic
  const gallery = document.querySelector(".gallery");

  // Only create the modal once
  const modal = document.createElement("dialog");
  modal.classList.add("image-modal");
  modal.innerHTML = `
    <button class="close-viewer">X</button>
    <img class="modal-image" src="" alt="">
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector(".modal-image");
  const closeButton = modal.querySelector(".close-viewer");

  gallery.addEventListener("click", (event) => {
    const img = event.target.closest("img");
    if (!img) return;

    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    const highResSrc = src.replace("-sm.jpeg", "-full.jpeg");

    modalImage.setAttribute("src", highResSrc);
    modalImage.setAttribute("alt", alt);
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    const rect = modalImage.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      modal.close();
    }
  });
});
