let sliderSimple = document.querySelector('.slider-simple');
let slidesSimple = sliderSimple.querySelectorAll('.slider-simple__slide');
let currentSlide = 0;

let simpleControls = sliderSimple.querySelectorAll('.controls__control');

let slideInterval = setInterval(slidePlaying, 3000);

function sss(j, callback) {

    setActive(slidesSimple, 'slider-simple__slide_active', j);
    setActive(simpleControls, 'controls__control_active_lite', j);
    goToSlide(j);
    clearInterval(slideInterval);

    callback();
}

function goToSlide(n) {

    slidesSimple[currentSlide].className = 'slider-simple__slide';
    simpleControls[currentSlide].className = 'controls__control controls__control_lite';
    currentSlide = (n+slidesSimple.length)%slidesSimple.length;
    slidesSimple[currentSlide].className = 'slider-simple__slide slider-simple__slide_active';
    simpleControls[currentSlide].className = 'controls__control controls__control_lite controls__control_active_lite';

}

for (let i = 0; i < simpleControls.length; i++) {
    simpleControls[i].onclick = function() {
        sss(i, function() {
            slideInterval = setInterval(slidePlaying, 3000);
        });
    }
}

function slidePlaying() {
    goToSlide(currentSlide + 1);
}