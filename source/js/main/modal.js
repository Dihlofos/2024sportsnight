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
