const checkbox = document.querySelector("#nav-checkbox");
const nav = document.querySelector(".nav-container");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    nav.style.animation = ` nav-close 0.2s ease-out forwards`;
  } else if (!checkbox.checked) {
    nav.style.animation = ` nav-open 0.2s ease-out forwards`;
  }
});

window.addEventListener("resize", () => {
  console.log('change');
  if (window.matchMedia("(max-width: 40em)").matches) {
    nav.style.animation = ``;
  }
});
