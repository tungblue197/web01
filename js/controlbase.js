$(document).ready(function () {
    console.log('ook')


    $('.slick-calousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '.slick-next',
        prevArrow: '.slick-prev',
        cssEase:'ease-in-out',
        dots:true,
        dotsClass: 'list-img',
        appendDots: '.slick-dots-a',
        customPaging: function(slick,index) {
            var targetImage = slick.$slides.eq(index).attr('src');
            console.log(slick.$slides.eq(index))
        
            return `<img src="${targetImage}"/>`
        }
    })

});