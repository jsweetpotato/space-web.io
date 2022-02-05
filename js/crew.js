const btns = document.querySelector(".dots");
const bio = document.querySelector("#bio");
const crew = document.querySelector("#name");
const role = document.querySelector("#role");
const image = document.querySelector("#image");

fetch("./data.json")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })
  .then((data) => {
    showCrews(data.crew);
  })
  .catch((err) => {
    console.log(new Error(err));
  });

function showCrews(crews) {
  btns.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.count === undefined) return;
    const count = Number(e.target.dataset.count);
    bio.textContent = crews[count].bio;
    role.textContent = crews[count].role;
    crew.textContent = crews[count].name;
    image.src = crews[count].images.png;

    // dot animation
    document.querySelector(".dot-select").classList.remove("dot-select");
    e.target.classList.add("dot-select");

    // blink animation
    document.querySelectorAll(".blink").forEach(el => {
      el.animate(
        [
          // keyframes
          {
            transform: "translateY(0px)",
            opacity: 0,
          },
          {
            transform: "translateY(0px)",
            opacity: 1,
          },
        ],
        {
          // animation
          duration: 300,
          easing: "cubic-bezier(0.215, 0.610, 0.355, 1)",
        }
      );
    });
  });
}
