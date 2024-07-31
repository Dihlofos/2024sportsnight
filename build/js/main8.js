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

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".js-dropdown-trigger");

    trigger.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });
  });
})();

"use strict";
(function () {
  const togglers = document.querySelectorAll(".js-faq-toggler");
  if (!togglers.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;
      const content = target.nextElementSibling;
      if (!content) return;
      target.classList.toggle("active");
      content.classList.toggle("active");
    });
  });
})();

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

  console.log("trigger", triggers);
  console.log("modals", modals);
})();

"use strict";
(function () {
  const nav = document.querySelector('.js-nav');
  const toggler = nav.querySelector('.js-nav-toggler');
  const closeButton = nav.querySelector('.js-nav-close');
  const links = nav.querySelectorAll('.js-scroll');

  toggler.addEventListener('click', () => {
    nav.classList.toggle('is-active');
  })

  closeButton.addEventListener('click', () => {
    closeNav();
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeNav();
    })
  })


  function closeNav() {
    nav.classList.remove('is-active');
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
