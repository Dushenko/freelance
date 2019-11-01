"use strict";

$(document).ready(function () {
  // burger
  $('.burger-opener').on('click', function () {
    $('.nav').toggleClass('show');
    $('.burger-opener').toggleClass('show');
  });
  $('.nav__link').on('click', function () {
    $('.nav').removeClass('show');
    $('.ham').toggleClass('active');
  }); // parallax

  function parallax() {
    var block = $('.header'),
        scrollLenght = $(window).scrollTop(),
        num = 100 + scrollLenght / 10;
    block.css({
      'background-size': "".concat(num, "%")
    });
  }

  parallax();
  $(window).scroll(function () {
    parallax();
  });
});
$(document).ready(function () {
  $('.not-call-btn').on('click', function () {
    $('.modal-wrap').fadeIn();
    $('.modal-form').fadeIn();
  });
  $('.modal__close').on('click', function () {
    $('.modal-wrap').fadeOut();
    $('.modal-form').fadeOut();
  });
  $('.modal-mask').on('click', function () {
    $('.modal-wrap').fadeOut();
    $('.modal-form').fadeOut();
  }); // form

  function verifyForm(target) {
    var value = target.val().trim().length;

    if (value < 1) {
      target.addClass('feedback__input_error');
      target.prev('.modal__text').addClass('feedback__placeholder_error');
      return false;
    } else {
      target.removeClass('feedback__input_error');
      target.prev('.modal__text').removeClass('feedback__placeholder_error');
      return 1;
    }
  }

  $('.feedback__input_requied').on('change', function () {
    verifyForm($(this));
  });
  $('.modal__btn').on('click', function () {
    $('.feedback__input_requied').each(function () {
      verifyForm($(this));
    });

    if ($('.feedback__placeholder_error').length > 0) {
      return false;
    } else {
      $('.modal-form').fadeOut();
      $('.modal-thanks').fadeIn();
      return false;
    }

    return false;
  });
});
$(document).ready(function () {
  $('.js-galery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    infinite: true,
    asNavFor: '.js-slider-nav'
  });
  $('.js-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.js-galery-slider',
    dots: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        autoplay: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.colorbox').colorbox({
    rel: 'gal'
  });

  if ($(window).width() <= 768) {
    $('.colorbox-youtube').colorbox({
      iframe: true,
      innerWidth: '90%',
      innerHeight: '50%'
    });
  } else {
    $('.colorbox-youtube').colorbox({
      iframe: true,
      innerWidth: 640,
      innerHeight: 390
    });
  }

  $('#cboxNext').on('click', function () {
    $('.js-galery-slider').slick('slickNext');
    $('.js-slider-nav').slick('slickNext');
  });
  $('#cboxPrevious').click(function () {
    $('.js-galery-slider').slick('slickPrev');
    $('.js-slider-nav').slick('slickPrev');
  });
});
$(document).ready(function () {
  //scroll
  $('.scroll-link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  }); //mask-tel

  $("input[type='tel']").mask("+7(999)999-99-99");
  var element = $(".nav");
  var golova = $(".header-bottom");
  var height_el = element.offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > height_el) {
      golova.addClass("fixed");
    } else {
      golova.removeClass("fixed");
    }
  }); //tabs

  $(function () {
    $("ul.tabs__caption").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
    });
  }); // Yzndex map

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [56.009049, 38.138182],
      zoom: 10,
      controls: ["geolocationControl", "routeEditor", "fullscreenControl"]
    });
    myMap.behaviors.disable('scrollZoom');
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
        position: {
          left: 10,
          top: 47
        }
      }
    });
    myMap.controls.add(zoomControl);
    var myPlacemark = new ymaps.Placemark([56.009049, 38.138182], {}, {
      iconLayout: 'default#image',
      iconImageSize: [40, 51],
      iconImageOffset: [-20, -47]
    });
    myMap.geoObjects.add(myPlacemark);
  });
});