document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__burger-block').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});
var swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
var swiper2 = new Swiper(".swiper2", {

    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {

        1440: {
            slidesPerView: 9,

        },
        769: {
            slidesPerView: 4,

        },
        300: {
            slidesPerView: 2.2,

        },
    },

});
var swiper2 = new Swiper(".swiper3", {

    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {

        1600: {
            slidesPerView: 3.1,

        },
        1024: {
            slidesPerView: 2.2,

        },
        300: {
            slidesPerView: 1,

        },
    },

});
let modalOpen = document.querySelectorAll('.modal__open');
for (let i = 0; i < modalOpen.length; i++) {
    modalOpen[i].addEventListener('click', () => {
        document.querySelector('.modal').classList.add('active');
        document.querySelector('.fade').classList.add('active');
        document.querySelector('body').classList.add('lock');
    })

}
document.querySelector('.modal__close').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('active');
    document.querySelector('.fade').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
})
document.querySelector('.fade').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('active');
    document.querySelector('.fade').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
})
