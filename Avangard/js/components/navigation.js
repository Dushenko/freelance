$(document).ready(function () {

  $('.js-matches-page').not(':first').hide();
  $('.js-match-tab').first().addClass('active');
  $('.js-match-tab').on('click', function () {
    $('.js-matches-page').hide();
    $('.js-match-tab').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).attr('data-matches')).show();
  });

  $('.js-photo-slider').not(':first').hide();
  $('.js-nav-photo__tab').first().addClass('active');
  $('.js-nav-photo__tab').on('click', function () {
    $('.js-photo-slider').hide();
    $('.js-nav-photo__tab').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).attr('data-photo')).show();
  });

  $('.js-arhive-page').not(':first').hide();
  $('.js-nav-filter-arhive__filter').first().addClass('active');
  $('.js-nav-filter-arhive__filter').on('click', function () {
    $('.js-arhive-page').hide();
    $('.js-nav-filter-arhive__filter').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).attr('data-arhive')).show();
  });

  $('.js-news-page').not(':first').hide();
  $('.js-nav-news__tab').first().addClass('active');
  $('.js-nav-news__tab').on('click', function () {
    $('.js-news-page').hide();
    $('.js-nav-news__tab').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).attr('data-news')).show();
  });

  $('.js-means-payment-text').not(':first').hide();
  $('.js-payment-form__label').first().addClass('active');
  $('.js-payment-form__label').on('click', function () {
    $('.js-means-payment-text').hide();
    $('.js-payment-form__label').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).attr('data-payment')).show();
  });
  
});

/*Main page scroll section*/
$(document).ready(function () {
  addScrollLink();
});

$(window).on('scroll', function () {
  addScrollLink();
});

function addScrollLink () {
  var ws = $(window).scrollTop() + 400,
  sectionTop = [];

  $('.js-scrolling').each(function(){
    sectionTop.push($(this).offset().top)
  });

  if(sectionTop[6] < ws) {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
    $("#navigation-menu ul li").eq(6).addClass('parent__li_active').children('a').addClass('active');
  } else if(sectionTop[5] < ws) {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
    $("#navigation-menu ul li").eq(5).addClass('parent__li_active').children('a').addClass('active');
  } else if(sectionTop[4] < ws) {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
    $("#navigation-menu ul li").eq(4).addClass('parent__li_active').children('a').addClass('active');
  } else if(sectionTop[3] < ws) {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
    $("#navigation-menu ul li").eq(3).addClass('parent__li_active').children('a').addClass('active');
  }
  else if(sectionTop[2] < ws) {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
    $("#navigation-menu ul li").eq(2).addClass('parent__li_active').children('a').addClass('active');
  }
  else if(sectionTop[1] < ws) {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
    $("#navigation-menu ul li").eq(1).addClass('parent__li_active').children('a').addClass('active');
  } else if(sectionTop[0] < ws && ws > $(window).height()) {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
    $("#navigation-menu ul li").eq(0).addClass('parent__li_active').children('a').addClass('active');
  } else {
    $("#navigation-menu ul li").removeClass('parent__li_active').children('a').removeClass('active');
  }
}

$('#navigation-menu a').click( function(){
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length != 0) {
    $("html, body").animate({scrollTop: $(scroll_el).offset().top}, 900);
    $('#navigation-menu a').removeClass('active').parent('li').removeClass('parent__li_active');
    $(this).addClass('active').parent('li').addClass('parent__li_active');
    addScrollLink();
  }
  return false;
});

$('#navigation-menu a.toTop').on('click', function(){
  var activeLink = $('#navigation-menu ul li');

  activeLink.each(function(){
    var liChild = $(this).children('a');
    if(liChild.hasClass('active')){
      $(this).addClass('parent__li_active');
      if($(this).index() == 1) {
        return false;
      } else {
        activeLink.eq($(this).index() - 2).addClass('parent__li_active');
        $(this).removeClass('parent__li_active');
        activeLink.eq($(this).index() - 2).children('a').trigger('click');
      }
    }
  })
});

$('#navigation-menu a.toBottom').on('click', function(){
  var activeLink = $('#navigation-menu ul li');
  if(activeLink.children('a').hasClass('active')) {
    activeLink.each(function() {
      var liChild = $(this).children('a');
      if (liChild.hasClass('active')) {
        $(this).addClass('parent__li_active');
        if ($(this).index() == 7) {
          return false;
        } else {
          activeLink.eq($(this).index()).addClass('parent__li_active');
          $(this).removeClass('parent__li_active');
          activeLink.eq($(this).index()).children('a').trigger('click');
          return false;
        }
      }
    })
  } else {
    activeLink.eq(0).children('a').trigger('click');
  }
});