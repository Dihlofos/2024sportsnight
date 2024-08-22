"use strict";
(function () {
  const names = ["parks", "objects", "city", "centers"];
  const vw = window.innerWidth;
  const thumbsMargin = vw > 1024 ? 15 : 9;
  const starsMargin = vw > 1024 ? 76 : vw > 744 ? 47 : 26;
  const starsSlidersPerView = vw >= 744 ? 4 : 2;

  names.forEach((name) => {
    const swiper = new Swiper(`.js-location-thumbs-${name}`, {
      spaceBetween: thumbsMargin,
      slidesPerView: "auto",
      freeMode: false,
      speed: 300,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
    });

    new Swiper(`.js-location-content-${name}`, {
      spaceBetween: 20000,
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
          e.thumbs.swiper.params.slideToClickedSlide = true;
          e.thumbs.swiper.update();
        },
        realIndexChange: function (e) {
          initStarsSlider(e.slides[e.realIndex]);
          e.thumbs.swiper.slideToLoop(swiper.realIndex);
        },
      },
    });

    function initStarsSlider(el) {
      const starsSlider = el.querySelector(".js-stars");
      const prevButton = el.querySelector(".js-stars-prev");
      const nextButton = el.querySelector(".js-stars-next");

      if (!starsSlider) return;

      new Swiper(starsSlider, {
        spaceBetween: starsMargin,
        slidesPerView: starsSlidersPerView,
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
