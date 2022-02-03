"use strict";
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
    document.querySelector(".dot-select").classList.remove("dot-select");
    e.target.classList.add("dot-select");
  });
}
