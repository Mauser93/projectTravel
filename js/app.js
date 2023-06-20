//corusel


  const owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        startPosition: 0,
        items: 1,
        responsive : {
            500: {
                items : 2,
                startPosition: 1,
            },
            600: {
                items : 3,
                startPosition: 1,
            },
            740: {
                items : 3,
                startPosition: 1,
            },
            850: {
                items : 3,
                startPosition: 1,
            },
            1200: {
                margin: 30,
                items : 3,
            }
        }
    });

$('.slider__btn--prew').click(function() {
    owl.trigger('prev.owl.carousel', [300]); 
       
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})
});


// nav icon
const nav = document.querySelector('.nav')


document.querySelector('.menu-icon-wrapper').addEventListener('click',()=>{
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
})



