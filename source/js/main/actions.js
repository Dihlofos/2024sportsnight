"use strict";
(function () {
  const slider = document.querySelector(".js-actions-slider");
  console.log("slider", slider);
  if (!slider) return;

  new Swiper(`.js-actions-slider`, {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 43,
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
