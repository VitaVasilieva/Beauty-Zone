const swiper = new Swiper(".swiper-container", {
  loop: true,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--activ",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel-button-next",
    prevEl: ".carousel-button-prev",
  },
});
