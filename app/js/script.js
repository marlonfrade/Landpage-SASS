//Função menu mobile

const hamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fade = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', function () {

    if (header.classList.contains('open')) { //Fecha o menu Mobile
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fade.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })



    } else { //Abre o menu mobile
        body.classList.add('noscroll');
        header.classList.add('open');
        fade.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

    }

});