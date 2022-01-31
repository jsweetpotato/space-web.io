const checkbox = document.querySelector("#nav-checkbox");
const nav = document.querySelector(".nav-container");
const mediaQuery = window.matchMedia("(max-width: 40em)");

checkbox.addEventListener("change", () => {
  if (!mediaQuery) return;
  if (checkbox.checked) {
    nav.style.animation = ` nav-close 0.2s linear forwards`;
  } else if (!checkbox.checked) {
    nav.style.animation = ` nav-open 0.2s linear forwards`;
  }
});
