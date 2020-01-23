"use strict";

$(document).ready(function () {
  $('.js-main-menu li').hover(function () {
    $(this).find('.js-menu').toggleClass('active');
  });
  $('.js-menu li').click(function () {
    $(this).find('.js-sub-menu').slideToggle();
    $(this).toggleClass('active');
  }); //burger

  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('body').removeClass('overflow');
      } else {
        $(this).addClass('active');
        $('.js-nav').addClass('active');
        $('body').addClass('overflow');
      }
    });
  }
});
$(document).ready(function () {
  $('.js-intro-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: false
  });
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: false
  });
});
$(document).ready(function () {
  if ($(window).width() > 768) {
    $('.grid').masonry({
      itemSelector: '.grid__item',
      columnWidth: '.grid__sizer',
      gutter: 30,
      percentPosition: true
    });
  }

  ;
  $('.js-filter-name').click(function () {
    $(this).next().slideToggle();
  });
});