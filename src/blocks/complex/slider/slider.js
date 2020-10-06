let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('.slider__slide');
let controls = slider.querySelectorAll('.controls__control');
let i = 0;

function initCarousel(slidesArr, controlsArr, callback) {

    setStartPoint(slidesArr, 'slider__slide_active');
    setStartPoint(controlsArr, 'controls__control_active');

    for (let x = 0; x < controlsArr.length; x++) {

        controlsArr[x].onclick = function() {

            i = x;

            setActive(controlsArr, 'controls__control_active', i);
            setActive(slidesArr, 'slider__slide_active', i);
        }

    }

    callback();
}

function carousel() {

    if (i !== 0) {
        if (slides[i - 1].classList.contains('slider__slide_active') && controls[i - 1].classList.contains('controls__control_active')) {
            slides[i - 1].classList.remove('slider__slide_active');
            controls[i - 1].classList.remove('controls__control_active');
        }
    } else {
        slides[slides.length - 1].classList.remove('slider__slide_active');
        controls[controls.length - 1].classList.remove('controls__control_active');
    }

    slides[i].classList.add('slider__slide_active');
    controls[i].classList.add('controls__control_active');

    if ((i < slides.length - 1) && (i < controls.length - 1)) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('carousel()', 3000);
}

window.addEventListener('load', function() {
    initCarousel(slides, controls, carousel);
})