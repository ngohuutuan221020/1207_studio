 
var swiper2 = new Swiper(".bg-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
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
    var element = document.getElementById("1");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide11");
    element1.style.width = "70%";
}
function myFunction2() {
    var element = document.getElementById("2");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide12");
    element1.style.width = "70%";
}
function myFunction3() {
    var element = document.getElementById("3");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide13");
    element1.style.width = "70%";
}
function myFunction4() {
    var element = document.getElementById("4");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide14");
    element1.style.width = "70%";
}
function myFunction5() {
    var element = document.getElementById("5");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide15");
    element1.style.width = "70%";
}
function myFunction6() {
    var element = document.getElementById("6");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide16");
    element1.style.width = "70%";
}
function myFunction7() {
    var element = document.getElementById("7");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide17");
    element1.style.width = "70%";
}
function myFunction8() {
    var element = document.getElementById("8");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide18");
    element1.style.width = "70%";
}
function myFunction9() {
    var element = document.getElementById("9");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide19");
    element1.style.width = "70%";
}
function myFunction10() {
    var element = document.getElementById("10");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide110");
    element1.style.width = "70%";
}
function myFunction11() {
    var element = document.getElementById("11");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide111");
    element1.style.width = "70%";
}
function myFunction12() {
    var element = document.getElementById("12");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide112");
    element1.style.width = "70%";
}
function myFunction13() {
    var element = document.getElementById("13");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide113");
    element1.style.width = "70%";
}
function myFunction14() {
    var element = document.getElementById("14");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide114");
    element1.style.width = "70%";
}
function myFunction15() {
    var element = document.getElementById("15");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide115");
    element1.style.width = "70%";
}
function myFunction16() {
    var element = document.getElementById("16");
    element.style.width = "85%"; 
    element.style.transition = "1s ease";
    var element1 = document.getElementById("wrapper_slide116");
    element1.style.width = "70%";
}