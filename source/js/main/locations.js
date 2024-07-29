"use strict";
(function () {
  const names = ["parks"];

  names.forEach((name) => {
    const swiper = new Swiper(`.js-location-thumbs-${name}`, {
      spaceBetween: 15,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
    });

    const swiper2 = new Swiper(`.js-location-content-${name}`, {
      spaceBetween: 10,
      slidesPerView: 1,
      speed: 0,
      navigation: {
        nextEl: `.js-location-next-${name}`,
        prevEl: `.js-location-prev-${name}`,
      },

      thumbs: {
        swiper: swiper,
      },
    });
  });
})();
