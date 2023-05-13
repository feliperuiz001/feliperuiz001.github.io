script.js
var swiper = new Swiper(".mySwiper",{

    slidesPerview: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints : {
        991:{
            slidesPerview
        }
    }
})