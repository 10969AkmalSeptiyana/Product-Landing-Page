// show menu
const toggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// remove menu link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => {
  n.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
});
