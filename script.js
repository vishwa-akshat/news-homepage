const hamburgerIcon = document.querySelector(".hamburger-icon-wrapper");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("hamburger-menu-active");
});

closeIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hamburger-menu-active");
});
