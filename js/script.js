"use strict";

const menuBtn = document.querySelector(".menu-btn");
const hamberger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".main-nav");
const menuNav = document.querySelector(".main-nav-list");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamberger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");

    showMenu = true;
  } else {
    hamberger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");

    showMenu = false;
  }
}
