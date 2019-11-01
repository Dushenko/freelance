$(function() {

    if ($('main').hasClass('main-page')) {

        $('.main-title').addClass('slide-up');
        setTimeout(function() {
            $('.intro-text').addClass('slide-up');
        }, 200)

        $(document).scroll(function() {

            let scrollTop = $(document).scrollTop();
            let sPopular = $('.popular-section').offset().top;
            let sBuyTours = $('.buy-tours-section').offset().top;
            let sMeritSection = $('.merit-section').offset().top;
            let sSearch = $('.search-tours-section').offset().top;

            //Popular Section
            if (scrollTop > sPopular - 700) {
                let item = $('.popular-section .tour');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
            }

            //Buy-Tours-Section
            if (scrollTop > sBuyTours - 700) {
                let descr = $('.buy-text');
                let title = $('.buy-sub-title');

                $('.img-wrap').addClass('slide-right');

                setTimeout(function() {
                    $('.buy-title').addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(descr[0]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(title[0]).addClass('slide-up');
                }, 700)

                setTimeout(function() {
                    $(descr[1]).addClass('slide-up');
                }, 600)

                setTimeout(function() {
                    $(descr[2]).addClass('slide-up');
                }, 700)

                setTimeout(function() {
                    $(title[1]).addClass('slide-up');
                }, 800)

                setTimeout(function() {
                    $(descr[3]).addClass('slide-up');
                    $(descr[4]).addClass('slide-up');
                    $(descr[5]).addClass('slide-up');
                }, 900)

                setTimeout(function() {
                    $('.buy-link').addClass('fade-in');
                }, 900)
            }

            if (scrollTop > sMeritSection - 700) {
                let item = $('.merit')

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
            }

            if (scrollTop > sSearch - 700) {
                let item = $('.search-info')

                $('.search-img').addClass('fade-in');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)

                setTimeout(function() {
                    $(item[3]).addClass('slide-up');
                }, 800)
            }

        });

    }

    if ($('main').hasClass('blog-page')) {
        $(document).scroll(function() {

            let scrollTop = $(document).scrollTop();
            let popularArticles = $('.popular-articles-section').offset().top;

            if (scrollTop > popularArticles - 700) {
                let item = $('.article');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
            }
        })
    }

    if ($('main').hasClass('about-page')) {

        let links = $('.links__item');
        let sAbout = $('.about-section').offset().top;
        let sHowBy = $('.how-buy-section').offset().top;

        setTimeout(function() {
            $('.about-page .intro-title').addClass('slide-up');
        }, 200)
        setTimeout(function() {
            $(links[0]).addClass('fade-in');
        }, 400)
        setTimeout(function() {
            $(links[1]).addClass('fade-in');
        }, 600)
        setTimeout(function() {
            $(links[2]).addClass('fade-in');
        }, 800)
        setTimeout(function() {
            $(links[3]).addClass('fade-in');
        }, 1000)
        setTimeout(function() {
            $(links[4]).addClass('fade-in');
        }, 1200)

        $(document).scroll(function() {

            let scrollTop = $(document).scrollTop();

            if (scrollTop > sAbout - 700) {

                let item = $('.advantage');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)
                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)
                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
                setTimeout(function() {
                    $(item[3]).addClass('slide-up');
                }, 800)
                setTimeout(function() {
                    $(item[4]).addClass('slide-up');
                }, 1000)
                setTimeout(function() {
                    $(item[5]).addClass('slide-up');
                }, 1200)
            }

            if (scrollTop > sHowBy - 700) {

                $('.img-wrap').addClass('slide-left');

                setTimeout(function() {
                    $('.buy-tabs-wrap').addClass('fade-in');
                }, 400)
            }

        })
    }

    if ($('main').hasClass('blog-open')) {
        $('.blog-title').addClass('slide-up');
        $(document).scroll(function() {
            let scrollTop = $(document).scrollTop();
            let sArticles = $('.articles-section').offset().top;
            let item = $('.find-wrap');

            if (scrollTop > sArticles - 700) {
                $('.find-tours').addClass('slide-up');
                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)
                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)
            }
        })
    }

    if ($('main').hasClass('contacts-page')) {
        $('.intro-title').addClass('slide-up');

        $(document).scroll(function() {
            let scrollTop = $(document).scrollTop();
            let item = $('.contact');
            let sContactsInfo = $('.contacts-info-section').offset().top;
            let sContscts = $('.contacts-section').offset().top;

            if (scrollTop > sContactsInfo - 700) {
                $(item[0]).addClass('slide-up');
                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 200)
                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 400)
            }

            if (scrollTop > sContscts - 700) {
                $('.map-wrap').addClass('slide-right');
                setTimeout(function() {
                    $('.connection').addClass('slide-up');
                }, 400)
            }
        })
    }

    if ($('main').hasClass('description-tour-page')) {
        $(document).scroll(function() {
            let scrollTop = $(document).scrollTop();
            let sHotelDescr = $('.hotel-description-section').offset().top;
            let sPayTour = $('.pay-tour-section').offset().top;
            let sHotelServ = $('.hotel-services-section').offset().top;
            let sHotelReviews = $('.hotel-reviews-section').offset().top;

            if (scrollTop > sHotelDescr - 700) {
                $('.description-slider').addClass('fade-in');

                setTimeout(function() {
                    $('.description-info').addClass('slide-up');
                }, 400);
            }

            if (scrollTop > sPayTour - 700) {
                $('.pay-tour-section').addClass('fade-in');
            }

            if (scrollTop > sHotelServ - 700) {
                let item = $('.service');

                $(item[0]).addClass('slide-up');

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 200)
                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 400)
                setTimeout(function() {
                    $(item[3]).addClass('slide-up');
                }, 600)
                setTimeout(function() {
                    $(item[4]).addClass('slide-up');
                }, 800)
                setTimeout(function() {
                    $(item[5]).addClass('slide-up');
                }, 1000)
                setTimeout(function() {
                    $(item).addClass('slide-up');
                }, 1200)
            }

            if (scrollTop > sHotelReviews - 700) {
                let review = $('.review');

                $(review[0]).addClass('slide-right');

                setTimeout(function() {
                    $(review[1]).addClass('slide-right');
                }, 200)
                setTimeout(function() {
                    $(review[2]).addClass('slide-right');
                }, 400)
                setTimeout(function() {
                    $(review[3]).addClass('slide-right');
                }, 400)
                setTimeout(function() {
                    $(review[4]).addClass('slide-right');
                }, 400)
            }

        })
    }

    if ($('main').hasClass('feedback-page')) {
        $('.intro-title').addClass('slide-up')
        $(document).scroll(function() {
            let scrollTop = $(document).scrollTop();
            let sFeedback = $('.feedback-section').offset().top;

            if (scrollTop > sFeedback - 700) {
                $('.feedback-section').addClass('fade-in');
            }
        })
    }

    if ($('main').hasClass('hot-tours-page')) {
        $(document).scroll(function() {
            let scrollTop = $(document).scrollTop();
            let sPopular = $('.popular-section').offset().top;
            let sBuyTours = $('.buy-tours-section').offset().top;

            if (scrollTop > sPopular - 700) {
                let item = $('.hot-tours-page .tour');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
                setTimeout(function() {
                    $(item[3]).addClass('slide-up');
                }, 800)
                setTimeout(function() {
                    $(item[4]).addClass('slide-up');
                }, 1000)
                setTimeout(function() {
                    $(item[5]).addClass('slide-up');
                }, 1200)
            }

            if (scrollTop > sBuyTours - 700) {
                let descr = $('.buy-text');
                let title = $('.buy-sub-title');

                $('.img-wrap').addClass('slide-right');

                setTimeout(function() {
                    $('.buy-title').addClass('slide-up');
                }, 200)

                setTimeout(function() {
                    $(descr[0]).addClass('slide-up');
                }, 400)

                setTimeout(function() {
                    $(descr[1]).addClass('slide-up');
                }, 600)

                setTimeout(function() {
                    $(descr[2]).addClass('slide-up');
                }, 700)

                setTimeout(function() {
                    $(descr[3]).addClass('slide-up');
                    $(descr[4]).addClass('slide-up');
                    $(descr[5]).addClass('slide-up');
                }, 900)

                setTimeout(function() {
                    $(descr[6]).addClass('slide-up');
                }, 1000)

                setTimeout(function() {
                    $(descr[7]).addClass('slide-up');
                }, 1100)

                setTimeout(function() {
                    $(descr[8]).addClass('slide-up');
                }, 1200)

                setTimeout(function() {
                    $('.buy-link').addClass('fade-in');
                }, 900)
            }
        })
    }

    if ($('main').hasClass('installment-page')) {
        $('.intro-title').addClass('slide-up');
        $(document).scroll(function() {
            let scrollTop = $(document).scrollTop();
            let sInstallment1 = $('.installment-section1').offset().top;
            let sInstallment2 = $('.installment-section2').offset().top;
            let sPayTour = $('.pay-tour-section').offset().top;

            if (scrollTop > sInstallment1 - 700) {
                let item = $('.installment-section1 .advantages');

                setTimeout(function() {
                    $(item[0]).addClass('slide-up');
                }, 200)
                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 400)
                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 600)
            }

            if (scrollTop > sInstallment2 - 700) {
                let item1 = $('.installment-section2 .advantages');

                setTimeout(function() {
                    $(item1[0]).addClass('slide-up');
                }, 200)
                setTimeout(function() {
                    $(item1[1]).addClass('slide-up');
                }, 400)
                setTimeout(function() {
                    $(item1[2]).addClass('slide-up');
                }, 600)
            }

            if (scrollTop > sPayTour - 700) {
                $('.pay-tour-section').addClass('slide-up');
            }


        })
    }

    if ($('main').hasClass('partners-page')) {
        $(document).scroll(function() {
            let scrollTop = $(document).scrollTop();
            let sPartners = $('.partners-section').offset().top;

            if (scrollTop > sPartners - 700) {
                let item = $('.partner');

                $(item[0]).addClass('slide-up');

                setTimeout(function() {
                    $(item[1]).addClass('slide-up');
                }, 200)
                setTimeout(function() {
                    $(item[2]).addClass('slide-up');
                }, 400)
                setTimeout(function() {
                    $(item[3]).addClass('slide-up');
                }, 600)
                setTimeout(function() {
                    $(item[4]).addClass('slide-up');
                }, 800)
            }
        })
    }


})