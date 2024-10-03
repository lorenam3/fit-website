document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.getElementById("navLinks");
  var hamburger = document.getElementById("hamburger");
  var closeIcon = document.getElementById("close");

  function showMenu() {
    navLinks.style.right = "0";
    hamburger.style.display = "none";
    closeIcon.style.display = "inline";
  }
  function hideMenu() {
    navLinks.style.right = "-200px";
    hamburger.style.display = "inline";
    closeIcon.style.display = "none";
  }

  hamburger.addEventListener("click", showMenu);
  closeIcon.addEventListener("click", hideMenu);
});

/* classes pricing*/

let swiperClasses = new Swiper(".classes-container", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
