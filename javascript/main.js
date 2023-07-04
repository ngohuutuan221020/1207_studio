var swiper = new Swiper(".bg-slider-thumbs1", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".bg-slider", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 10,
  freeMode:{
    enabled: true,
    minimumVelocity: 0.02,
    momentumBounce: false,
    momentumVelocityRatio: 0.5,
    momentumRatio: 0.5,
    momentumBounceRatio: 0.5,

  },
  grabCursor: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

function myFunction1() {
    document.getElementById("1").style.overflow = "unset";
}
function myFunction2() {
    document.getElementById("2").style.overflow = "unset";
}
function myFunction3() {
    document.getElementById("3").style.overflow = "unset";
}
function myFunction4() {
    document.getElementById("4").style.overflow = "unset";
}
function myFunction5() {
    document.getElementById("5").style.overflow = "unset";
}
function myFunction6() {
    document.getElementById("6").style.overflow = "unset";
}
function myFunction7() {
    document.getElementById("7").style.overflow = "unset";
}
function myFunction8() {
    document.getElementById("8").style.overflow = "unset";
}
function myFunction9() {
    document.getElementById("9").style.overflow = "unset";
}
function myFunction10() {
    document.getElementById("10").style.overflow = "unset";
}
function myFunction11() {
    document.getElementById("11").style.overflow = "unset";
}
function myFunction12() {
    document.getElementById("12").style.overflow = "unset";
}
function myFunction13() {
    document.getElementById("13").style.overflow = "unset";
}
function myFunction14() {
    document.getElementById("14").style.overflow = "unset";
}
function myFunction15() {
    document.getElementById("15").style.overflow = "unset";
}
function myFunction16() {
    document.getElementById("16").style.overflow = "unset";
}