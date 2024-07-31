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
