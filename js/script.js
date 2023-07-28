"use strict";

const burgerBtn = document.querySelector(".nav__burger");
const closeBtn = document.querySelector(".nav__close");
const nav = document.querySelector(".nav");

// MOBILE NAVIGATION
burgerBtn.addEventListener("click", function () {
  nav.classList.add("nav--open");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("nav--open");
});

// Menu fade animation;
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into function
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// HERO CUSTOM SLIDER
let counter = 1;
const images = document.querySelectorAll(".main-hero__photo").length;

setInterval(() => {
  document.querySelector(".main-hero__photo.show").classList.remove("show");

  const img = document.querySelector(`.main-hero__photo--${counter}`);
  img.classList.add("show");
  counter++;

  if (counter > images) {
    counter = 1;
  }
}, 4000);

//--------------------------------------
