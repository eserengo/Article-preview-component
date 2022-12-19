document.querySelectorAll(".fa-share").forEach((icon) => {
  icon.addEventListener("click", () => {
    document.querySelector(".popup").classList.toggle("inactive");
  })
})