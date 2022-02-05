const planet = document.querySelector("#name");
const image = document.querySelector("#image");
const description = document.querySelector("#description");
const distance = document.querySelector("#distance");
const travel = document.querySelector("#travel");

const btns = document.querySelector(".planet-nav ul");
const select = document.querySelector(".planet-select");

fetch("./data.json")
  .then(
    (resp) => {
      console.log(resp);
      return resp.json();
    },
    (err) => {
      console.log(err);
    }
  )
  .then((data) => {
    showDestination(data.destinations);
  })
  .catch((err) => {
    console.log(new Error(err));
  });

function showDestination(data) {
  btns.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.dataset.count) return;
    const count = Number(e.target.dataset.count);
    planet.textContent = data[count].name;
    description.textContent = data[count].description;
    distance.textContent = data[count].distance;
    travel.textContent = data[count].travel;
    image.src = data[count].images.webp;

    console.log(e.target.offsetLeft);

    // set planet-select styles
    select.style.width = `${e.target.clientWidth + 1}px`;
    select.style.transform = `translateX(${e.target.offsetLeft - 1}px)`;

    // set planet-nav .select color
    const text = document.querySelector(".planet-nav ul .select");
    text.classList.remove("select");
    e.target.classList.add("select");

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
