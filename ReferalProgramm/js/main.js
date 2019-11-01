$(document).ready(function () {

    // burger
    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-opener').toggleClass('show');

        $('.town-wrap-burger').show();
        $('.nav-burger').show();
        $('.contacts-burger').show();
    });

    //scrollTop
    $('.nav__link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.review-slider').slick();
    
    // scrollTop
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });


    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: true,
        dots: false,
        infinite: true,
        focusOnSelect: true
    });

    //lang
    $(".translate").click(function () {
        var clicked = $(this).html();
        $('.current-lang').html(clicked);
    });

    $('.translate').on('click', function () {
        $('.lang__drop').removeClass('show');
    });

    $('.lang__list_current').on('click', function () {
        $('.lang__drop').toggleClass('show');
    });

    //modal 

    $('.navigation__login').on('click', function () {
        $('.mask').fadeIn();
        $('.login-wrap').fadeIn();
    });

    $('.navigation__btn').on('click', function () {
        $('.mask').fadeIn();
        $('.reg-wrap').fadeIn();
    });

    $('.reg-opener').on('click', function () {
        $('.login-wrap').fadeOut();
        $('.reg-wrap').fadeIn();
    });


    $('.user-form__close').on('click', function () {
        $('.mask').fadeOut();
        $('.login-wrap').fadeOut();
        $('.reg-wrap').fadeOut();
    });
});

<ul class="nav nav-tabs story-tabs" id="story-tabs" role="tablist">
              <li class="nav-item"><a :class="['nav-link js-seconary-tab', activeTab === 'contents' && 'active show']"
                                      id="description-tab"
                                      href="#description" data-toggle="tab" data-tab-name="contents" role="tab"
                                      aria-controls="description"
                                      aria-selected="true" data-id="1">Описание</a></li>
              <li class="nav-item"><a :class="['nav-link js-seconary-tab', activeTab === 'chapters' && 'active show']"
                                      id="contents-tab"
                                      data-toggle="tab" href="#contents"
                                      data-tab-name="chapters" role="tab" aria-controls="contents"
                                      aria-selected="false"
                                      data-id="2">Оглавление</a></li>
              <li class="nav-item"><a class="nav-link js-seconary-tab" id="statistics-tab"
                                      href="{% url "books:book-stats-one" book_id=object.id %}"
                                      target="_blank">Статистика</a></li>
            </ul>
            <ul class="nav nav-tabs story-tabs" id="story-tabs" role="tablist">
              <li class="nav-item">
                <a :class="['nav-link js-seconary-tab', activeTab === 'contents' && 'active show']" id="description-tab" href="#description" data-toggle="tab" data-tab-name="contents" role="tab" aria-controls="description" aria-selected="true" data-id="1">Описание</a>
              </li>
              <li class="nav-item">
                <a :class="['nav-link js-seconary-tab', activeTab === 'chapters' && 'active show']" id="contents-tab" data-toggle="tab" href="#contents" data-tab-name="chapters" role="tab" aria-controls="contents" aria-selected="false" data-id="2">Оглавление</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-seconary-tab" id="statistics-tab" href="{% url "books:book-stats-one" book_id=object.id %}" target="_blank">Статистика</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-seconary-tab" id="sales-tab" href="{% url "books:book-stats-one" book_id=object.id %}" target="_blank">Продажи</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-seconary-tab" id="promocodes-tab" href="{% url "books:book-stats-one" book_id=object.id %}" target="_blank">Промокоды</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-seconary-tab" id="reviews-tab" href="{% url "books:book-stats-one" book_id=object.id %}" target="_blank">Отзывы</a>
              </li>
            </ul>