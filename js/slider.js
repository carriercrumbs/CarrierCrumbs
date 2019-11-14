$('.slider').slick({
    infinite: true,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect:true,
    prevArrow: '<button class="slider__prev">&#10094;</button>',
    nextArrow: '<button class="slider__next">&#10095;</button>',

    settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
    },

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});