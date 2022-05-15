"use strict";
const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
    // console.log(overlay.classList());
  });

  // *************************************************************************
  btnCloseModal[i].addEventListener("click", function () {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
    // console.log("kks");
  });

  overlay.addEventListener("click", function () {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });

  document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modal[i].classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}

// *****************************************************//
const nav_links = document.querySelector(".header__main-nav--links");
nav_links.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e.target.classList);
  // Matching strategy
  if (e.target.classList.contains("links")) {
    const id = e.target.getAttribute("href");

    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  if (hamburgerContainer.classList.contains("clicked")) {
    hamburgerContainer.classList.remove("clicked");
  }
});

document
  .querySelector(".showcase__content--link")
  .addEventListener("click", (e) => {
    e.preventDefault();
    projects.scrollIntoView({ behavior: "smooth" });
  });
// /*************************************************** */

// const allSections = document.querySelectorAll(".hidden_translate");
//
// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//
//   if (!entry.isIntersecting) return;
//
//   entry.target.classList.remove("hidden_translate");
//   observer.unobserve(entry.target);
// };
//
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });
//
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("hidden_translate");
// });
