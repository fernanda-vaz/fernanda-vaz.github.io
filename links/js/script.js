const seeMoreBtn = document.getElementById("see-projects");
const hideDiv = document.getElementById("hide-content");

seeMoreBtn.addEventListener("click", () => {
  hideDiv.classList.toggle("show");
});
