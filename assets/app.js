const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-mobile-panel]");

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const isOpen = navPanel.dataset.open === "true";
    navPanel.dataset.open = String(!isOpen);
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}

const mainImage = document.querySelector("[data-main-image]");
const thumbButtons = document.querySelectorAll("[data-thumb]");

thumbButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!mainImage) {
      return;
    }

    thumbButtons.forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    mainImage.src = button.dataset.fullImage || "";
    mainImage.alt = button.dataset.alt || "";
  });
});
