/**
 * Created by Denis on 28/01/2018.
 */
$(function () {

    /**Scroll up to head */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    /** Smoothly scroll */
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(window).width() <= 768) {
            if ($(window).scrollTop() > 1600) {
                $(".skills .progress-bar").addClass("scrolled")
            }
        } else if ($(window).width() > 768 && $(window).width() <= 992) {
            if ($(window).scrollTop() > 900) {
                $(".skills .progress-bar").addClass("scrolled")
            }
        } else if ($(window).width() > 992 && $(window).width() <= 1200) {
            if ($(window).scrollTop() > 850) {
                $(".skills .progress-bar").addClass("scrolled")
            }
        } else {
            if ($(window).scrollTop() > 850) {
                $(".skills .progress-bar").addClass("scrolled")
            }
        }
    });

});