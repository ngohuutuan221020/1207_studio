var swiper = new Swiper(".bg-slider-thumbs1", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: swiper,
  },
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

// js for video

const btnVideo = document.querySelectorAll(".nav-btn");
const slideVideo = document.querySelectorAll(".video-slide");
const contentVideo = document.querySelectorAll(".content");
var sliderNav = function (manual) {
  btnVideo.forEach((btn) => {
    btn.classList.remove("active");
  });
  btnVideo[manual].classList.add("active");
  // --------
  slideVideo.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideVideo[manual].classList.add("active");
  // --------
  contentVideo.forEach((content) => {
    content.classList.remove("active");
  });
  contentVideo[manual].classList.add("active");
};
btnVideo.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// lien he
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
