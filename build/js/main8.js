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

"use strict";
(function () {
  // init controller

  initCommonAnimations();

  function initCommonAnimations() {
    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tweenOneRight = TweenMax.to("#marquee-one-right", 1, { x: -900 });
    var tweenOneLeft = TweenMax.to("#marquee-one-left", 1, { x: 900 });
    var tweenTwoRight = TweenMax.to("#marquee-two-right", 1, { x: -900 });
    var tweenTwoLeft = TweenMax.to("#marquee-two-left", 1, { x: 900 });

    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: "#marquee-one",
      offset: -900,
      duration: 1800,
    })
      .setTween(tweenOneRight)
      .addTo(controller);

    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: "#marquee-one",
      offset: -900,
      duration: 1800,
    })
      .setTween(tweenOneLeft)
      .addTo(controller);

    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: "#marquee-two",
      offset: -900,
      duration: 1800,
    })
      .setTween(tweenTwoRight)
      .addTo(controller);

    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: "#marquee-two",
      offset: -900,
      duration: 1800,
    })
      .setTween(tweenTwoLeft)
      .addTo(controller);
  }
})();

"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };
  }
})();

"use strict";
(function () {
  const dropdowns = document.querySelectorAll(".js-dropdown");

  if (!dropdowns.length) {
    return;
  }

  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("js-dropdown-trigger")) {
      clearDropdowns();
    }
  });

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".js-dropdown-trigger");

    trigger.addEventListener("click", () => {
      clearDropdowns();
      dropdown.classList.toggle("open");
    });
  });

  function clearDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  }
})();

"use strict";
(function () {
  const togglers = document.querySelectorAll(".js-faq-item");
  if (!togglers.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      toggler.classList.toggle("show");
    });
  });
})();

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
      freeMode: true,
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

"use strict";
(function () {
  const triggers = document.querySelectorAll(".js-modal-trigger");
  const modals = document.querySelectorAll(".js-modal");
  const showClass = "show";
  const closeClass = "js-modal-close";

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const route = trigger.dataset.route;
      const modal = document.querySelector(`.js-modal[data-route="${route}"]`);
      if (!modal) return;

      modal.classList.add(showClass);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (el) => {
      if (el.target.classList.contains(closeClass)) {
        modal.classList.remove(showClass);
      }
    });
  });
})();

"use strict";
(function () {
  const nav = document.querySelector(".js-nav");
  const toggler = document.querySelector(".js-nav-toggler");
  const closeButton = nav.querySelector(".js-nav-close");
  const links = nav.querySelectorAll(".js-scroll");

  toggler.addEventListener("click", () => {
    nav.classList.toggle("is-active");
  });

  closeButton.addEventListener("click", () => {
    closeNav();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  function closeNav() {
    nav.classList.remove("is-active");
  }
})();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
    offset: 100,
  });
})();
