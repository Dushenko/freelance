$(document).ready(function () {
  $('.js-burger-opener').on('click', function () {
    $('.burger-menu').toggleClass('show');
    $('.town-wrap-burger').show();
    $('.nav-burger').show();
    $('.contacts-burger').show();
  });

  $('.js-load-more-matches').on('click', function () {
    $('.match-hidden').slideDown();
  });

  $('.js-load-more-news').on('click', function () {
    $('.news-hidden').slideDown();
  });

  $('.js-load-more-archive').on('click', function () {
    $('.archive-hidden').slideDown();
  });

  $('.js-order__delete').on('click', function () {
    $(this).parent().parent().hide();
  });
});

$(window).resize(function () {
  if ($(window).width() <= 768) {
    $('.burger-menu').show();
  } else {
    $('.burger-menu').removeClass('show');
    $('.ham').removeClass('active');
  }
});