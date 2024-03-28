const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 3000);
});

const navToggle = document.querySelector(".nav-toggle");
const mainMenu = document.querySelector(".main-menu");
const navToggleLabel = document.querySelector(".nav-toggle-label");

navToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
  navToggleLabel.classList.toggle("active");
});

mainMenu.addEventListener("click", (event) => {
  if (event.target) {
    mainMenu.classList.remove("active");
    navToggleLabel.classList.remove("active");
  }
});
