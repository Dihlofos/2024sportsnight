"use strict";
(function () {
  const slider = document.querySelector(".js-actions-slider");
  const vw = window.innerWidth;
  const sliderMargin = vw > 1024 ? 43 : 20;
  const slidesPerView = vw >= 744 ? 3 : 1;
  if (!slider) return;

  new Swiper(`.js-actions-slider`, {
    // Optional parameters
    slidesPerView: slidesPerView,
    spaceBetween: sliderMargin,
    initialSlide: 0,
    draggable: false,
    pagination: false,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".js-actions-next",
      prevEl: ".js-actions-prev",
    },
  });
})();
