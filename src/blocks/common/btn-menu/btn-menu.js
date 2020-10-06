let btnMenu = document.querySelector('.btn-menu');
let topLine = document.querySelector('.btn-menu__top-line');
let bottomLine = document.querySelector('.btn-menu__bottom-line');
let btnText = document.querySelector('.btn-menu__content');
let hiddenMenu = document.querySelector('.header__menu');

function transformBtn(topLineValue, bottomLineValue, btnTextValue, btnTextContent, callback) {

    topLine.style.transform = topLineValue;
    bottomLine.style.transform = bottomLineValue;
    btnText.style.transform = btnTextValue;
    btnText.textContent = btnTextContent;
    hiddenMenu.classList.remove('header__menu_hidden');

    if (btnMenu.getAttribute('menu-state') == 'unfolded') {
        // btnMenu.style.background = 'red';
        topLine.style.transform = '';
        bottomLine.style.transform = '';
        btnText.style.transform = '';
        btnText.textContent = 'menu';
        hiddenMenu.classList.add('header__menu_hidden');
    }

    callback();
}

btnMenu.addEventListener('click', function() {
    transformBtn('translateY(400%)rotate(45deg)', 'translateY(-450%)rotate(-45deg)', 'translateY(150%)', 'close', function() {
        if (btnMenu.getAttribute('menu-state') == 'folded') {
            btnMenu.setAttribute('menu-state', 'unfolded');
        } else {
            btnMenu.setAttribute('menu-state', 'folded');
        }
    });

});

