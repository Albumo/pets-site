$(document).ready(function () {
    $('body').AddClassAnimation();

    var $burger = $('.js-header-burger');
    var $nav = $('.js-header-toggle nav');
    $burger.on('click', function () {
        $(this).toggleClass('open');
        $('.header').toggleClass('open');
        $nav.toggleClass('open');
        $('body').toggleClass('fixed-position');
    });

    $('.header__menu-item a').click(function () {
        $('a.active').removeClass('active');
        $(this).addClass('active');
        $('.js-header-burger').removeClass('open');
        $('.header').removeClass('open');
        $('.js-header-toggle nav').removeClass('open');
        $('.header__burger-letter').removeClass('open');
        $('.header__nav').removeClass('open');
        $('body').removeClass('fixed-position');
    });

    $('.js-to-item').on('click', function () {
        scrollToItem($(this));
    });

    if ($('.js-slider').length) {
        $('.js-slider').slick({
            lazyLoad: 'ondemand',
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            mobileFirst: true,
            responsive: [{
                breakpoint: 567,
                settings: {

                    slidesToShow: 2,
                },

            },

                {
                    breakpoint: 767,
                    settings: {

                        slidesToShow: 3,
                    },

                }, {
                    breakpoint: 1223,
                    settings: {
                        slidesToShow: 3,
                        arrows: true,
                    }
                }]

        });
    }

    $(window).scroll(function () {
        const height = $(window).scrollTop();

        if (height > 1) {
            $('.js-header').addClass('is-scroll');
        } else {
            $('.js-header').removeClass('is-scroll');
        }

    });

});

//Scroll animation
(function ($) {
    var addClassAnimation = {
        elementAnim: '.js-animate',
        classAnim: 'is-animated'
    };

    addClassAnimation.add = function () {
        var element = this.elementAnim;
        var addClass = this.classAnim;

        $(element).each(function () {
            var $this = $(this);
            var offsetEl = $this.offset();

            if (offsetEl.top <= $(document).scrollTop() + $(window).height() / 1.3) {
                $this.addClass(addClass);
            }
        });
    };

    $.fn.AddClassAnimation = function (options) {
        if (options && typeof options === 'object') {
            $.extend(addClassAnimation, options);
        }

        var $this = $(this);

        addClassAnimation.add($this);

        $(window).on('scroll', function () {
            addClassAnimation.add($this);
        });

        return this;
    };
})(jQuery);
//Scroll animation END


// scroll to element
function scrollToItem(elem) {
    var el = $(elem).attr('href').slice(1),
        elToScroll = $(`#${el}`),
        navHeight = ($('.js-header').outerHeight()),
        time = 600,
        gap = 10,
        offsetTop = elToScroll.offset().top,
        totalScroll = offsetTop - navHeight - gap;

    $('body,html').animate({
        scrollTop: totalScroll
    }, time);

    return false;
}
