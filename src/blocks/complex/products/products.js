let posters = document.querySelectorAll('.poster');

for (let poster of posters) {

    let posterButtons = poster.querySelector('.poster__btns');
    let image = poster.querySelector('img');

    poster.onmouseover = function() {
        posterButtons.classList.remove('visually-hidden');
        image.style.filter = 'brightness(90%)';
    }

    poster.onmouseout = function() {
        posterButtons.classList.add('visually-hidden');
        image.style.filter = '';
    }
}