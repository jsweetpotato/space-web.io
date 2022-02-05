const technology = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#image");

const btns = document.querySelector(".btns");

fetch("./data.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    imageLoad(data.technology);
    showTech(data.technology);
  })
  .catch((err) => console.log(new Error(err)));

function imageLoad(data) {
  if (window.matchMedia("(max-width: 70em)").matches) {
    image.src = data[0].images.landscape;
    console.log("landscape");
  } else {
    image.src = data[0].images.portrait;
    console.log("portrait");
  }
}

function showTech(data) {
  btns.addEventListener("click", (e) => {
    if (!e.target.dataset.count) return;
    const count = Number(e.target.dataset.count);
    console.log(typeof count);
    console.log(data);
    technology.textContent = data[count].name;
    description.textContent = data[count].description;

    // set media query image
    if (window.matchMedia("(max-width: 70em)").matches) {
      image.src = data[count].images.landscape;
      console.log("landscape");
    } else {
      image.src = data[count].images.portrait;
      console.log("portrait");
    }

    // set button style
    const select = document.querySelector(".btn-select");
    select.classList.remove("btn-select");
    e.target.classList.add("btn-select");

    // blink animation
    document.querySelectorAll(".blink").forEach((el) => {
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
