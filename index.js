const splash = document.querySelector(".splash");
const splash2 = document.querySelector(".splash2");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
  setTimeout(function() {
    splash.classList.add("display-none");
    setTimeout(function() {
      splash2.classList.add("display-none");
    }, 3000);
  }, 3000);
})});

const navToggle = document.querySelector(".nav-toggle");
const mainMenu = document.querySelector(".main-menu");
const navToggleLabel = document.querySelector(".nav-toggle-label");
const closeButton = document.querySelector(".close__button");
const greyLayer = document.querySelector(".grey-layer");

navToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
  navToggleLabel.classList.toggle("active");
  mainMenu.classList.add("active");
  greyLayer.classList.add("fade-in-opacity");
});

closeButton.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  greyLayer.classList.remove("fade-in-opacity");
});

greyLayer.addEventListener("click", () => {
  mainMenu.classList.remove("active");
  greyLayer.classList.remove("fade-in-opacity");
  navToggleLabel.classList.remove("active");
});

mainMenu.addEventListener("click", (event) => {
  if (event.target) {
    mainMenu.classList.remove("active");
    navToggleLabel.classList.remove("active");
    greyLayer.classList.remove("fade-in-opacity");
  }
})