

$(function(){
    
    $('.slider-blog__inner').slick({
        dots: true,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/left-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 801,
              settings: {
                arrows: false,
              }
            },
          ],
    });

// 3
    $('.menu__btn').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });


    var mixer = mixitup('.portfolio__content');
});
