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
