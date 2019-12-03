"use strict";

$(document).ready(function () {
  $(".accordion > .accordion__head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".accordion__content").slideUp(200);
      $(".accordion > .accordion__head .accordion__btn").removeClass("top").addClass("down");
    } else {
      $(".accordion > .accordion__head .accordion__btn").removeClass("top").addClass("down");
      $(this).find(".accordion__btn").removeClass("down").addClass("top");
      $(".accordion > .accordion__head").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this).siblings(".accordion__content").slideDown(200);
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.js-burger').click(function () {
    $(this).toggleClass('is-open');
    $('.js-nav').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.scroll-down').on('click', function () {
    fullpage_api.moveSectionDown();
  });
  $('.scroll-up').on('click', function () {
    fullpage_api.moveSectionUp();
  });
  $('.js-form').on('click', function () {
    $('.js-mask').fadeIn('active');
    $('.js-modal').fadeIn('active');
  });
  $('.js-mask').on('click', function () {
    $(this).fadeOut('active');
    $('.js-modal').fadeOut('active');
  });

  if ($(window).width() < 1024) {
    fullpage_api.setResponsive(true);
  }

  $(window).resize(function () {
    if ($(window).width() < 1024) {
      fullpage_api.setResponsive(true);
    }
  });
});