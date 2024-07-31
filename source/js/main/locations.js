"use strict";
(function () {
  const names = ["parks", "objects", "city", "centers"];

  names.forEach((name) => {
    const swiper = new Swiper(`.js-location-thumbs-${name}`, {
      spaceBetween: 15,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(`.js-location-content-${name}`, {
      spaceBetween: 10,
      slidesPerView: 1,
      draggable: false,
      allowTouchMove: false,
      speed: 0,
      navigation: {
        nextEl: `.js-location-next-${name}`,
        prevEl: `.js-location-prev-${name}`,
      },
      thumbs: {
        swiper: swiper,
      },
      on: {
        afterInit: function (e) {
          initStarsSlider(e.slides[e.realIndex]);
        },
        slideChange: function (e) {
          initStarsSlider(e.slides[e.realIndex]);
        },
      },
    });

    function initStarsSlider(el) {
      const starsSlider = el.querySelector(".js-stars");
      const prevButton = el.querySelector(".js-stars-prev");
      const nextButton = el.querySelector(".js-stars-next");

      console.log("starsSlider", starsSlider);

      if (!starsSlider) return;

      new Swiper(starsSlider, {
        spaceBetween: 76,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        loop: false,
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
      });
    }
  });
})();
