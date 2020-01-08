"use strict";

$(document).ready(function () {
  //burger
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('body').removeClass('overflow');
        $('html').removeClass('overflow');
      } else {
        $(this).addClass('active');
        $('.js-nav').addClass('active');
        $('body').addClass('overflow');
        $('html').addClass('overflow');
      }
    });
  }
});
$(document).ready(function () {
  //modal 
  $('.js-open-modal').click(function () {
    $('.js-contacts').fadeIn();
    $('.js-mask').fadeIn();
  });
  $('.js-modal-close').click(function () {
    $('.modal').fadeOut();
    $('.js-mask').fadeOut();
  });
  $('.js-mask').click(function () {
    $(this).fadeOut();
    $('.modal').fadeOut();
  });
});
$(document).ready(function () {
  //select 
  $('.js-select').click(function () {
    $(this).toggleClass('active');
    $('.js-select-list').slideToggle();
  }); //close custom select

  $(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".js-select");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.js-select-list').slideUp();
      }
    });
  });
  $('.select__list li').click(function () {
    var selected = $(this).text();
    $('.select__text').text(selected);
  });
});
$(document).ready(function () {
  $('.js-vacancy-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  $('.js-news-sliser').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true
  });
});
$(document).ready(function () {
  //tabs
  $(function () {
    $(".cart").on("click", "path:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.region-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
});
$(document).ready(function () {});