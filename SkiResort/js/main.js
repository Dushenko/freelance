$(document).ready(function () {

    // burger

    $('.burger').on('click', function () {
        $(this).toggleClass('burgerActive');
        $('.nav-drop').addClass('show');
        $('.main-menu').hide();
        $('.return-menu').hide();
        $('.return-section').hide();
        if (!$(this).hasClass('burgerActive')) {
            closeAll()
            $('.main-menu').show();
        } else {}
    });

    // about page active

    $('.about-opener').on('click', function () {
        $('.about-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
    })

    $('.rooms').on('click', function () {
        $('.rooms-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
        $('.main-menu').hide();
        $('.burger').addClass('burgerActive');
        $('.rooms').hide();

    })

    $('.toRooms').on('click', function () {
        closeAll();
        krpano.call('startup');
        $('.toRooms').hide();
        $('.rooms-section').addClass('showActive');

    })

    $('.rooms-opener').on('click', function () {
        $('.rooms-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
    })

    $('.offers-opener').on('click', function () {
        $('.offers-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
    })

    $('.conference-opener').on('click', function () {
        $('.conference-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
    })

    $('.restaurant-opener').on('click', function () {
        $('.restaurant-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
    })

    $('.services-opener').on('click', function () {
        $('.services-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
    })

    $('.contacts-opener').on('click', function () {
        $('.contacts-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
    })

    $('.header-contacts-opener').on('click', function () {
        $('.contacts-section').addClass('showActive');
        $('.nav-drop').removeClass('show');
        $('.return-menu').show();
        $('.main-menu').hide();
        $('.burger').addClass('burgerActive');
    })

    // return-menu
    $('.return-menu').on('click', function () {
        closeAll();
        $('.nav-drop').addClass('show');
        $('.return-menu').hide();
    })

    // return-section
    $('.return-section').on('click', function () {
        closeAll();
        $('main').children().eq(prpr).addClass('showActive');
        $('.return-section').hide();
        $('.return-menu').show();
    });

    // lang-tab
    $('.lang-tab').first().addClass('active')
    $('.lang-tab').on('click',function(){
        $('.lang-tab').removeClass('active');
        $(this).addClass('active');
    })

    var prpr;

    $('.rooms-open-btn').on('click', function () {
        prpr = $('main > .showActive').index();
        closeAll();
        $('.room-open-section').addClass('showActive');
        $('.return-menu').hide();
        $('.return-section').show();

    });

    $('body').on('click','.offer-details-opener', function () {
        prpr = $('main > .showActive').index();
        closeAll();
        $('.offer-open-section').addClass('showActive');
        $('.return-menu').hide();
        $('.return-section').show();
    });

    // offres sub btn

    $('body').on('click','.subOfferBtn', function () {
        let reservationOffSpec = $(this).parents('.offer-open-section').find('.mainOfferPosition').html();
        $('.reservation-value').val(reservationOffSpec);
    })

    $('body').on('click','.subBtn', function () {
        let formNamesub = $(this).parents('.room-open-content').find('.secondTitle').html();
        $('.hiddenInpt').val(formNamesub);
    })

    $('body').on('click','.offer-reserv-btn', function () {
        $('.reservation-offer-popup').fadeIn();
        let reservationOff = $(this).parents('.slide').find('.offer-title').html();
        $('.reservation-value').val(reservationOff);
    });


    $('body').on('click','.hall-reserv-btn', function () {
        let reservationHall = $(this).parents('.conference-info').find('.conference-title').html();
        $('.reservation-hall').val(reservationHall);
    })
    
    $('.route-opener').on('click', function () {
        prpr = $('main > .showActive').index();
        closeAll();
        $('.contacts-routes-section').addClass('showActive');
        $('.return-menu').hide();
        $('.return-section').show();
    });

    //reservation-drop
    $('.reservation-drop').hide();
    $('.reservation-btn').on('click', function(){
        $('.reservation-drop').fadeToggle();
    })

    $('.popup-close').on('click', function () {
        $('.reservation-drop').fadeOut();
    })

    //reservation-serche-popup

    $('.reservation-serche-popup').hide();
    $('.serche-popup-opener').on('click', function () {
        // $('.reservation-dataLast').val(dataLast);
    });

    $('.popup-close').on('click', function () {
        $('.reservation-serche-popup').fadeOut();
    })

    //reservation-hall-popup
    $('.reservation-hall-popup').hide();
    $('.hall-reserv-btn').on('click', function(){
        $('.reservation-hall-popup').fadeToggle();
    })

    $('.popup-close').on('click', function () {
        $('.reservation-hall-popup').fadeOut();
    })

    //reservation-room-popup
    $('.reservation-room-popup').hide();
    $('.room-reserv-btn').on('click', function(){
        $('.reservation-room-popup').fadeToggle();
        $('.reservation-drop').hide();

        let formName = $(this).parents('.room').find('.rooms-title').text();
        $('.hiddenInpt').val(formName);
    })

    $('.popup-close').on('click', function () {
        $('.reservation-room-popup').fadeOut();
    })

    //reservation-offer-popup
    $('.reservation-offer-popup').hide();
    $('.offer-reserv-btn').on('click', function(){
        $('.reservation-offer-popup').fadeToggle();
    })

    $('.popup-close').on('click', function () {
        $('.reservation-offer-popup').fadeOut();
    })

    //thanks-popup
    $('.thanks-popup').hide();
    $('.thanks-popup-btn').on('click', function(){
        $('.thanks-popup').fadeIn();
        $('.popup-hide-js').fadeOut();
        setTimeout(function(){
          $('.thanks-popup').fadeOut();
      }, 1500);
    })

    // datepicker
    $( function() {
        $( "#datepicker-hereNew, #datepicker-hereEnd").datepicker({
            minDate: new Date(),
        });
    });

    //mask 
    $("input[type='tel']").mask("+99(999) 999-99-99");
});

function closeAll() {
    $('*').removeClass('show');
    $('*').removeClass('showActive');
}

jQuery(function () {
    initSlickCarousel();
});

// slick init
function initSlickCarousel() {
    jQuery('.room-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        // autoplay: true,
        focusOnSelect: true
    });

    jQuery('.conference-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        // autoplay: true,
        focusOnSelect: true
    });

    jQuery('.offer-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
        ]
    });

    jQuery('.restaurant-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
        ]
    });
}