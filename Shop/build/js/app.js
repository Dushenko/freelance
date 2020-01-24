"use strict";

$(document).ready(function () {
  $('.js-menu li').click(function () {
    $(this).find('.js-sub-menu').slideToggle();
    $(this).toggleClass('active');
  });

  if ($(window).width() > 900) {
    $('.js-main-menu li').hover(function () {
      $(this).find('.js-menu').toggleClass('active');
    });
  }

  ;

  if ($(window).width() < 900) {
    $('.js-main-menu li').not('.js-menu').click(function () {
      $(this).find('.js-menu').slideToggle();
    });
  }

  ; //burger

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
  $('.js-images-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: false,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
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
  $('.js-mob-filter').click(function () {
    $('.js-filter-form').slideToggle();
  });
  $('.filter-tab__head').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
});