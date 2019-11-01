$(document).ready(function () {

    //more-btn
    $('.more-btn').on('click', function () {
        $('.tab-hidden-content').slideDown();
    });

    $('.more-btn-portfolio').on('click', function () {
        $('.portfolio-hidden-content').slideDown();
    });

    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-mask').toggleClass('show');

        $('.nav__link').removeClass('nav__link_active');
        $('.nav__main-sub').removeClass('nav__main-sub_open');
        $('.arrow').removeClass('active');
        $('.nav__link-sub').removeClass('nav__main-sub_open');

        $('.js-nav__sub-one').removeClass('nav__sub_open active');
        $('.js-nav__sub-two').removeClass('nav__sub_open active');
        $('.js-nav__sub-three').removeClass('nav__sub_open active');

        $('.nav__link-sub-one').removeClass('active');
        $('.nav__link-sub-two').removeClass('active');
        $('.nav__link-sub-three').removeClass('active');
    });


    //burger-menu

    $('.js-nav__link').on('click', function () {
        $(this).toggleClass('nav__link_active');
        $('.nav__main-sub').toggleClass('nav__main-sub_open');
        $('.arrow_main').toggleClass('active');
        $('.nav__link-sub').toggleClass('nav__main-sub_open');
        
    });

    $('.nav__link-sub-one').on('click', function () {
        $(this).toggleClass('active');
        $('.js-nav__sub-one').toggleClass('nav__sub_open');
        $('.arrow-one').toggleClass('active');
    });

    $('.nav__link-sub-two').on('click', function () {
        $(this).toggleClass('active');
        $('.js-nav__sub-two').toggleClass('nav__sub_open');
        $('.arrow-two').toggleClass('active');
    });

    $('.nav__link-sub-three').on('click', function () {
        $(this).toggleClass('active');
        $('.js-nav__sub-three').toggleClass('nav__sub_open');
        $('.arrow-three').toggleClass('active');
    });

    //sliders
    $('.pool-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.video-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

});

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 18,
        disableDefaultUI: true,
        center: {lat: 50.01195872, lng: 36.21707439},
    };

    var myMap = new google.maps.Map(element, options);

    var markers = [
    {
        coordinates: {lat: 50.01195872, lng: 36.21707439},
        info: '<h3>Москва</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
    }
    ];

    for(var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap
        });

        if(properties.image) {
            marker.setIcon(properties.image);
        }

        if(properties.info) {
            var InfoWindow = new google.maps.InfoWindow({
                content: properties.info
            });

            marker.addListener('click', function(){
                InfoWindow.open(myMap, marker);
            });
        }
    }
}