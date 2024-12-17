const menuBtn = document.getElementById("nav_menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = document.querySelector("i");

const nav = document.getElementById("nav");
const sticky = nav.offsetTop;

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
