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
$(document).ready(function () {});
$(document).ready(function () {
  $('.js-prod-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.js-about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true
  });
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    appendDots: $('.dots'),
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true
  });
  $('.js-tablet-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.js-big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    pauseOnHover: true,
    infinite: true,
    focusOnSelect: false,
    asNavFor: '.js-small-slider'
  });
  $('.js-small-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.js-big-slider',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });
});
$(document).ready(function () {
  //tabs
  $(function () {
    $("ul.js-tab-btn").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tab-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
  $('.js-tab-btn li a').click(function () {
    var selected = $(this).text();
    $('.select-text').text(selected);
  });
});
$(document).ready(function () {
  // $('.js-burger').click( function () {
  // 	$(this).toggleClass('active');
  // 	$('.js-nav').toggleClass('active');
  // 	$('html').toggleClass('overflow');
  // 	$('body').toggleClass('overflow');
  // });
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $('body').removeClass('overflow');
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
      } else {
        $('body').addClass('overflow');
        $(this).addClass('active');
        $('.js-nav').addClass('active');
      }
    });
  } //select 


  $('.js-select').click(function () {
    $(this).toggleClass('active');
    $('.js-scroll').toggleClass('active');
  }); //lang

  $('.js-lang').click(function () {
    $('.langs').slideToggle('active');
  }); //filter

  $('.js-filter-btn').click(function () {
    $('.js-filter-form').toggleClass('active');
  }); //modal

  $(".js-open-modal").click(function () {
    $('.js-mask').fadeIn();
    $('.js-modal').fadeIn();
  });
  $(".js-modal-close").click(function () {
    $('.js-mask').fadeOut();
    $('.js-modal').fadeOut();
  }); //video

  $(".js-open-video").click(function () {
    $('.js-video-mask').fadeIn();
    $('.js-video').fadeIn();
    $('body').addClass('overflow');
  });
  $('.js-close-video').click(function () {
    $('.js-video').fadeOut();
    $('.js-video-mask').fadeOut();
    $('body').removeClass('overflow');
    var videoURL = $('#video').prop('src');
    videoURL = videoURL.replace("&autoplay=1", "");
    $('#video').prop('src', '');
    $('#video').prop('src', videoURL);
  }); //close custom select

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      // событие клика по веб-документу
      var div = $(".js-select"); // тут указываем ID элемента

      if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) {
        // и не по его дочерним элементам
        div.removeClass('active'); // скрываем его

        $('.js-scroll').removeClass('active');
      }
    });
  }); //wow animation

  new WOW().init();
});