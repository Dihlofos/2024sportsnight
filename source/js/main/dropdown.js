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
