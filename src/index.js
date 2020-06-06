import "./main.scss";

if (typeof Swiper !== "undefined") {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".dots",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-button-right",
      prevEl: ".slider-button-left",
    },
  });
}

var burgerBtn = document.querySelector(".js-burger");
var menu = document.querySelector(".js-menu");

if (burgerBtn && menu) {
  burgerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      burgerBtn.classList.remove("active");
      return;
    }
    menu.classList.add("active");
    burgerBtn.classList.add("active");
  });
}
