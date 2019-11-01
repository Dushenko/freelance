"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var btnSearchOpen = document.querySelector('span.advanced-search-open'); // button open class

  var btnSearchClose = document.querySelectorAll('span.advanced-search-close'); // button close class

  var formMain = document.querySelector('.main-form'); // main form class

  var formAdvensed = document.querySelector('.advanced-search'); // advensed form class

  btnSearchOpen.addEventListener('click', function () {
    formMain.classList.add('main-form_hide');
    formAdvensed.classList.add('advanced-search_show');
  });

  for (var i = 0; i < btnSearchClose.length; i++) {
    btnSearchClose[i].addEventListener('click', function () {
      formMain.classList.remove('main-form_hide');
      formAdvensed.classList.remove('advanced-search_show');
    });
  } // function burgerMenuClosee(){
  // 	burgerMenu.classList.remove('show');
  // }
  // window.addEventListener('click', function(){
  // 	burgerMenuClosee()
  // })

});
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelectorAll('.sidebar-btn');
  var sideBar = document.querySelector('.sidebar-wrap');
  var bars = document.querySelectorAll('.sidebar');
  var sideBarClose = document.querySelector('.sidebar-close');
  var btnBurgerOpener = document.querySelector('.js-burger-opener'); // burger opener btn

  var burgerMenu = document.querySelector('.burger-menu'); // burger menu

  var sidebarNav = document.querySelector('.sidebar-nav'); // sidebar nav

  var busketBtn = document.querySelector('.basket-link');
  var burgerMask = document.querySelector('.burger-mask');

  for (var i = 0; i < btn.length; i++) {
    var item = btn[i];
    item.addEventListener('click', function (event) {
      for (var _i = 0; _i < bars.length; _i++) {
        bars[_i].classList.remove('js-active');
      }

      for (var _i2 = 0; _i2 < btn.length; _i2++) {
        btn[_i2].classList.remove('js-active');
      }

      var target = this.dataset.target;
      target = ".".concat(target);
      target = document.querySelector(target);
      event.stopPropagation();
      target.classList.add('js-active');
      sideBar.classList.add('js-active');
      sideBarClose.classList.add('show');
      event.target.classList.add('js-active');
    });
  }

  sideBar.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  function sideBarClosee() {
    sideBar.classList.remove('js-active');
    sideBarClose.classList.remove('show');
    burgerMask.classList.remove('show');

    for (var _i3 = 0; _i3 < bars.length; _i3++) {
      bars[_i3].classList.remove('js-active');
    }

    for (var _i4 = 0; _i4 < btn.length; _i4++) {
      btn[_i4].classList.remove('js-active');
    }
  }

  function menuClose() {
    sideBar.classList.remove('burger');
    sidebarNav.classList.remove('burger');
    burgerMenu.classList.remove('show');
    btnBurgerOpener.classList.remove('js-burger-opener_active');
    sideBarClosee();
  }

  function menuOpen() {
    burgerMenu.classList.add('show');
    sideBar.classList.add('burger');
    sidebarNav.classList.add('burger');
    burgerMask.classList.add('show');
  }

  btnBurgerOpener.addEventListener('click', function (event) {
    menuOpen();
    setTimeout(function () {
      document.querySelector('.user-btn').classList.add("js-active");
      document.querySelector('.sidebar_user').classList.add('js-active');
    }, 10);
    event.stopPropagation();
  });
  busketBtn.addEventListener('click', function (event) {
    menuOpen();
    setTimeout(function () {
      document.querySelector('.sidebar_basket').classList.add("js-active");
      document.querySelector('.basket-btn').classList.add('js-active');
      return false;
    }, 10);
    event.stopPropagation();
  });
  window.addEventListener('click', function () {//menuClose();
  });
  burgerMenu.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  sideBarClose.addEventListener('click', function () {
    menuClose();
  });
}); // Slider Begin

document.addEventListener('DOMContentLoaded', function () {
  var slider = new Swiper('.arrivals-slider', {
    slidesPerView: 4,
    centeredSlides: false,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.arrivals-next',
      prevEl: '.arrivals-prev'
    },
    breakpoints: {
      1150: {
        slidesPerView: 3
      },
      900: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1,
        centeredSlides: true
      }
    }
  });
  var sliderBrands = new Swiper('.brands-slider', {
    slidesPerView: 'auto',
    loop: true,
    speed: 1000,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
      nextEl: '.brands-next',
      prevEl: '.brands-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        centeredSlides: true
      }
    }
  });
  var sliderDetail = new Swiper('.detail-slider', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.detail-next',
      prevEl: '.detail-prev'
    }
  });
}); // Slider End

;

(function () {
  //    get the prefix or non-prefix raf
  var animate = function () {
    var action = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

    return function (runner) {
      action.call(window, runner);
    };
  }(); //    get or set the scrollTop value


  var scrollTop = function scrollTop(component, nextStep) {
    if (nextStep == null) {
      return component.scrollY != null ? component.scrollY : component.scrollTop;
    } else if (nextStep <= 0) {
      component.scrollTo ? component.scrollTo(0, 0) : component.scrollTop = 0;
      return 0;
    } else {
      component.scrollTo ? component.scrollTo(0, nextStep) : component.scrollTop = nextStep;
      return nextStep;
    }
  }; //    set speed


  var speedConduct = function speedConduct(originSpeed, time, cur, total) {
    if (total === 0) {
      return 0;
    }

    var method = Math.sin;
    var PI = Math.PI;
    var INIT_SPEED = 2;
    return originSpeed * method(PI * (total - cur) / total) + INIT_SPEED;
  };

  var scroll2Top = function scroll2Top(component, time) {
    var DEFAULT_TIME = 1000;

    if (component == null) {
      console.error('You must assign a dom node object or window object as the first param.');
      return;
    }

    if (time == null) {
      time = DEFAULT_TIME;
    }

    var originY = scrollTop(component);
    var currentY = originY;
    var originSpeed = originY / (time / 60);
    var currentSpeed;

    (function operate() {
      currentSpeed = speedConduct(originSpeed, time, currentY, originY);
      currentY -= currentSpeed;

      if (scrollTop(component, currentY) !== 0) {
        animate(operate);
      }
    })();
  };

  if (window.define != null) {
    define(function () {
      return scroll2Top;
    });
  } else {
    window.scroll2Top = scroll2Top;
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = 10;

    if (scrolled > coords) {
      goTopBtn.classList.add('show');
    }

    if (scrolled < coords) {
      goTopBtn.classList.remove('show');
    }
  }

  function backToTop() {}

  var goTopBtn = document.querySelector('.toTop-btn');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', function () {
    scroll2Top(window, 700);

    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  });
});