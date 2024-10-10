document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function () {
    const images = [
        'assets/Fashionskrg/merak.jpg',
        'assets/Fashionskrg/image2.jpg',
        'assets/Fashionskrg/image3.jpg'
    ];

    let current = 0;
    const $heroSection = $('.hero-section'); // Select hero section using jQuery

    function changeBackground() {
        $heroSection.css('background-image', `url(${images[current]})`);
        current = (current + 1) % images.length;
        setTimeout(changeBackground, 3000);
    }

    changeBackground();
});
