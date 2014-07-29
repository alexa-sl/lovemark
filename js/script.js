$(function () {
    $('.slider_responses').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        slideWidth: 445,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 20
    });

    $('.slider_partners').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        slideWidth: 125,
        minSlides: 7,
        maxSlides: 7,
        slideMargin: 15
    });

    var top = $('.icon-arrow_top');

    top.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(window).on('scroll', function () {
        var scrolledY = $(this).scrollTop();

        if (1600 <= scrolledY && scrolledY <= 2300) {
            $('.left').addClass('slideLeft');
            $('.right').addClass('slideRight');
        }
        else {
            $('.left').removeClass('slideLeft');
            $('.right').removeClass('slideRight');
        }

        if (1250 <= scrolledY && scrolledY <= 1750) {
            $('.why_box').find('.span4').addClass('slideLeft');
        }
        else {
            $('.why_box').find('.span4').removeClass('slideLeft');
        }
    });

    $('.option_box').on('mouseover', function () {
        $(this).find('.option_box_icon').addClass('pulse')
    });
    $('.option_box').on('mouseleave', function () {
        $(this).find('.option_box_icon').removeClass('pulse')
    });

    $('.span3').on('mouseover', function () {
        $(this).find('.icon-contacts').addClass('pulse')
    });
    $('.span3').on('mouseleave', function () {
        $(this).find('.icon-contacts').removeClass('pulse')
    });


    $('.facts_item').on('mouseover', function () {
        $(this).find('.facts_icon_wrp').addClass('element-animation')
    });
    $('.facts_item').on('mouseleave', function () {
        $(this).find('.facts_icon_wrp').removeClass('element-animation')
    });

    $('.number').counterUp({
        delay: 10, // the delay time in ms
        time: 2500 // the speed time in ms
    });

});