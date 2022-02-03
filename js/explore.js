const explore = document.querySelector(".explore");

explore.addEventListener("click", () => {
  if (window.innerWidth > 1098) return;
  console.log("media");
  explore.classList.add("after");
  setTimeout(() => explore.classList.remove("after"), 200);
});
