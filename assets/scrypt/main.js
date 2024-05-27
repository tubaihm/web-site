// ハンバーガーメニュー
var hamburger = $('.header__menu');
$('.header__button').on('click', function () {
    hamburger.toggleClass('header__menu-active');
});

$('a[href^="#"]').click(function () {
    hamburger.removeClass('header__menu-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('header__menu-active');
});

// カルーセル
$(function () {
    $('.gallery__carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        fade: true,
    });
});

// アコーディオン
$('.faq__question').on('click', function (e) {
    $(this).toggleClass('faq__question--active');
    $(this).next().slideToggle();
});