$(document).ready(function () {
    $('.image-slider').slick({
        slidesToShow: 4,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 300,
        //draggable : dùng chuột để di chuyển qua lại , mặc định là true 
        prevArrow: "<button type='button' class='slick-next pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-prev pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
    });
});