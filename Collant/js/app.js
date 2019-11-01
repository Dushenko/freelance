"use strict";

$(document).ready(function () {
  var menu = $('.catalog-wrap'); //catalog show

  $('.js-catalog-btn').click(function () {
    $('.catalog-wrap').toggleClass('active');
    $('.mask').addClass('active');
    $(this).toggleClass('active');
    return false;
  });
  $("body").click(function (e) {
    if (menu.hasClass('active') && !menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.removeClass('active');
      $('.mask').removeClass('active');
    }
  }); //catalog slose

  $('.mask').click(function () {
    $(this).removeClass('active');
    $('.catalog-wrap').removeClass('active');
    $('.burger').removeClass('active');
    $('.header-menu').removeClass('show');
    $('.results-sidebar').removeClass('show');
  });
  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('show');
    $('.mask').toggleClass('active');
    $('.js-modalwindow').removeClass('show');
  });
  $('.js-come-back').click(function () {
    $('.catalog-wrap').removeClass('active');
    $('.results-sidebar').removeClass('show');
    $('.mask').removeClass('active');
  }); // Filters

  $('.more-info').click(function () {
    $(this).prev().slideToggle();
    $(this).toggleClass('active');
  }); // mob filter 

  $('.mob-filter').click(function () {
    $('.results-sidebar').addClass('show');
    $('.mask').addClass('active');
  });
  $('.del-filter').click(function () {
    $(this).parent().hide();
  });
  $('.priceFilter').click(function () {
    $(this).toggleClass('active');
  }); // sliders

  $('.carousel-collection').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    navigation: true,
    navigationText: ["", ""],
    rewindNav: true,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 600,
    navContainer: '.customNav',
    responsive: {
      768: {
        mouseDrag: false,
        touchDrag: false
      }
    }
  });
  var rangeSlider = $(".carousel-range");
  rangeSlider.owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      768: {
        items: 2
      },
      850: {
        items: 3
      },
      1100: {
        items: 4
      }
    }
  });
  var salesSlider = {
    items: 5,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      768: {
        items: 3
      },
      900: {
        items: 4
      },
      1100: {
        items: 5
      }
    }
  };
  var bestsellersSlider = {
    items: 1,
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    responsive: {
      768: {
        items: 2
      },
      950: {
        items: 3
      },
      1150: {
        items: 4
      }
    }
  };
  $('.carousel-range').owlCarousel(rangeSlider);
  $('.carousel-sales').owlCarousel(salesSlider);
  $('.carousel-bestsellers').owlCarousel(bestsellersSlider);
  checkClasses();
  rangeSlider.on('translated.owl.carousel', function (event) {
    checkClasses();
  });

  function checkClasses() {
    var total = $('.carousel-range .owl-stage .owl-item.active').length;
    $('.carousel-range .owl-stage .owl-item').removeClass('firstActiveItem');
    $('.carousel-range .owl-stage .owl-item.active').each(function (index) {
      if (index === 0) {
        $(this).addClass('firstActiveItem');
      }
    });
  }

  if ($(window).width() < 768) {
    $('.carousel-range').trigger('destroy.owl.carousel');
    $('.carousel-sales').trigger('destroy.owl.carousel');
    $('.carousel-bestsellers').trigger('destroy.owl.carousel');
  } else {
    $('.carousel-range').owlCarousel(rangeSlider);
    $('.carousel-sales').owlCarousel(salesSlider);
    $('.carousel-bestsellers').owlCarousel(bestsellersSlider);
  }

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.carousel-range').trigger('destroy.owl.carousel');
      $('.carousel-sales').trigger('destroy.owl.carousel');
      $('.carousel-bestsellers').trigger('destroy.owl.carousel');
    } else {
      $('.carousel-range').owlCarousel(rangeSlider);
      $('.carousel-sales').owlCarousel(salesSlider);
      $('.carousel-bestsellers').owlCarousel(bestsellersSlider);
    }
  });
});